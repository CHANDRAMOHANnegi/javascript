import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SSR Example",
};

type SSRPageProps = {
    message: string;
    timestamp: string;
};

async function fetchData(): Promise<SSRPageProps> {
    const response = await fetch("http://localhost:3000/api/data", {
        cache: "no-store", // Ensures fresh data on each request
    });
    return response.json();
}

const SSRPage = async () => {
    const data = await fetchData();

    return (
        <div>
            <h1>Server-Side Rendering (SSR)</h1>
            <p>
                {data.message} - {data.timestamp}
            </p>
        </div>
    );
};

export default SSRPage;
