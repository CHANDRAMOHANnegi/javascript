import { useEffect, useState } from "react"

export const useData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(d => d.json())
            .then(setData)
    }, [])

    return {
        data
    }
}