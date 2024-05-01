"use client";
import React, { useState, useEffect, useRef } from "react";
import "./module.style.scss";

function App() {
  const [feeds, setFeeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const observer = useRef(null);
  const lastPostRef = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    console.log(entry);
    if (entry.isIntersecting && !isLoading) {
      loadMorePosts();
    }
  };

  const loadMorePosts = () => {
    setIsLoading(true);
    const lastPostId = feeds[feeds.length - 1]?.id || 0;
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${
        lastPostId + 1
      }&_limit=5`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFeeds((prevFeeds) => [...prevFeeds, ...data]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading posts:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.5,
    };

    observer.current = new IntersectionObserver(handleIntersection, options);
    if (lastPostRef.current) {
      observer.current.observe(lastPostRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [feeds]);

  const handleAddFeed = () => {
    setFeeds((prevFeeds) => [
      ...prevFeeds,
      {
        id: feeds.length + 1,
        posts: [],
      },
    ]);
  };

  return (
    <div className="app">
      <h1>News Feed</h1>
      <button onClick={handleAddFeed}>Add Feed</button>
      {feeds.map((feed, feedIndex) => (
        <div key={feedIndex} className="feed">
          <h2>Feed {feed.id}</h2>
          <FeedPosts feedIndex={feedIndex} posts={feed.posts} />
        </div>
      ))}
      <div
        style={{ height: "20vh", backgroundColor: "red" }}
        ref={lastPostRef}
      ></div>
      {isLoading && <p className="loading">Loading...</p>}
    </div>
  );
}

function FeedPosts({ posts }) {
  return (
    <div>
      {posts?.map((post, postIndex) => (
        <div key={post.id} className="post">
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
