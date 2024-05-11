import { useEffect, useState } from "react"

export const withFetchData = (Component, url) => {

    return (props) => {

        const [isLoading, setIsLoading] = useState(false)
        const [error, setError] = useState(false)
        const [data, setData] = useState([])

        useEffect(() => {
            const makeApiCall = async () => {
                setIsLoading(true)

                try {
                    let res = await fetch(url)
                    if (res.ok) {
                        res = await res.json()
                        setData(res)
                    } else {
                        setError("Error hai")
                    }
                } catch (error) {

                }
            }

            makeApiCall()
        }, [url])

        if (error) {
            return <div>{error}</div>
        }

        return (<>
            <Component data={data} {...props} />
        </>)
    }
}