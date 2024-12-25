import { useEffect, useState } from "react";
import "./style.css";

type DataProp = {
    products: Array<Record<string, string>>
    limit: number,
    total: number
}

function debounce(callback, delay = 500) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

export const InfiniteScrollingApp = () => {
    const [data, setData] = useState<DataProp>({ products: [], limit: 10, total: 0 });
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);

    // Function to fetch data based on the current page
    const getData = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://dummyjson.com/products?limit=10&skip=${page * 10}&select=title,price,thumbnail`
            );
            const { products, ...rest } = await response.json();
            setData((prevData) => ({
                products: [...prevData.products, ...products],
                ...rest
            }));
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    // Trigger data fetching whenever the `page` changes
    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    // Scroll event handler with debouncing
    const handleScroll = debounce(() => {
        // console.log('==', window.innerHeight , document.documentElement.scrollTop,
        //     document.documentElement.offsetHeight);
        /****
         * window.innerHeight + document.documentElement.scrollTop ==== document.documentElement.offsetHeight
         * 
         * window ki inner height + jitna scroll hua hai
         * vo poore document ki height ke barabar hai
         * 
         * 
         * offsetHeight wo height hai jo element ko inspect karte waqt dikhti hai
         * 
         * ***/ 
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 500 &&
            !loading && (page * 10) < data.total
        ) {
            /******
             * 
             * !
             * use callback approach inside the listeners, callbacks to update state
             * otherwise stale state me be updated
             * *****/
            setPage((prevPage) => prevPage + 1);
        }
    }, 500);

    // Set up the scroll event listener
    useEffect(() => {
        console.log('=====');
        
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);

        /*****
         * 
         * !
         * dependency here are very important
         * 
         * *****/
    }, [handleScroll, loading]);

    return (
        <div className="container">
            {data.products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.thumbnail} alt={product.title} />
                    <div className="card-title">{product.title}</div>
                </div>
            ))}
            {loading && <div>...loading</div>}
        </div>
    );
};

export default InfiniteScrollingApp;
