import React, { useEffect, useRef, useState } from 'react';

const ITEM_LIMIT = 15;

const getRandomData = () =>
  [...Array(ITEM_LIMIT)].map((_, idx) => ({
    label: `Item ${idx + 1} - ${Math.floor(Math.random() * 1000)}`,
  }));

export const InfiniteScroll = () => {
  const [data, setData] = useState(getRandomData());
  const [isFetching, setIsFetching] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const fetchData = () => {
    if (isFetching) return; // Prevent multiple fetch calls
    setIsFetching(true);
    setTimeout(() => {
      const newData = getRandomData();
      setData((prev) => [...prev, ...newData]);
      setIsFetching(false);
    }, 1000); // Simulate a network delay
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching) {
          fetchData();
        }
      },
      {
        root: null, // Default is the viewport
        rootMargin: '200px', // Fetch data 200px before the sentinel enters the viewport
        threshold: 0.1, // Trigger when at least 10% of the sentinel is visible
      }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [isFetching]);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <div style={{ height: '30vh', overflow: 'auto', border: '1px solid #ccc', justifyContent: "center" }}>
        <ul>
          {data.map((d, index) => (
            <li key={index} style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
              {d.label}
            </li>
          ))}
        </ul>
        <div ref={sentinelRef} style={{ height: '1px', width: "100px", background: 'red' }} />
        {isFetching && <p style={{ textAlign: 'center' }}>Loading more items...</p>}
      </div>
    </div>
  );
};
