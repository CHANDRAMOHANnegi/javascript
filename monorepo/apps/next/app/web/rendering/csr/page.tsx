"use client";

import { useEffect, useState } from "react";

type ApiResponse = {
    message: string;
    timestamp: string;
};

const CSRPage = () => {
    const [data, setData] = useState<ApiResponse | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/data");
            const result: ApiResponse = await response.json();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Client-Side Rendering (CSR)</h1>
            {data ? (
                <p>
                    {data.message} - {data.timestamp}
                </p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CSRPage;
