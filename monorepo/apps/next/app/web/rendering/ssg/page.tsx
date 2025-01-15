import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SSG Example",
};

type SSGPageProps = {
    message: string;
    timestamp: string;
};

async function fetchData(): Promise<SSGPageProps> {
    const response = await fetch("http://localhost:3000/api/data", {
        cache: "force-cache", // Cache data for static generation
    });
    return response.json();
}

const SSGPage = async () => {
    const data = await fetchData();

    return (
        <div>
            <h1>Static Site Generation (SSG)</h1>
            <p>
                {data.message} - {data.timestamp}
            </p>
        </div>
    );
};

export default SSGPage;
