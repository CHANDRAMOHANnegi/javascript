import { useEffect, useRef, useState } from "react";
import "./style.css";

export const InfiniteScrollingApp = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);

    const observerTarget = useRef(null);

    // Fetch data from API
    const fetchData = async () => {
        if (loading) return;  // Prevent duplicate API calls while loading
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10}&select=title,price,thumbnail`);
            const json = await response.json();
            setData((prevData) => [...prevData, ...json.products]);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    // Initial data load on component mount
    useEffect(() => {
        fetchData();
    }, []);  // Empty array ensures it only runs once on initial mount

    // IntersectionObserver to detect when to load more data
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading) {
                    fetchData();  // Load more data when the observer target is in view
                }
            },
            { threshold: 1 }  // Trigger when 100% of the target is visible
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current); // Cleanup observer on unmount
            }
        };
    }, [loading]); // Add loading as dependency to avoid multiple triggers when still loading

    return (
        <div className="container">
            {data.length > 0 &&
                data.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div className="card-title">{product.title}</div>
                    </div>
                ))}
            {loading && <div>...loading</div>}
            {data.length&&<div ref={observerTarget}></div>} {/* Observer target div to track scroll */}
        </div>
    );
};

export default InfiniteScrollingApp;
