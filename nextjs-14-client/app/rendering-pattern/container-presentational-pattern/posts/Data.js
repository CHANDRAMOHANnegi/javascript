// https://alpha.learnersbucket.com/s/courses/658bee23e4b0174a3cb6c294/take
import { useEffect, useState } from "react"
import DataList from "./DataList"
import { useData } from "./useData"

export const Data = () => {

    const [data, setData] = useState([])

    const d = useData()

    const fetchData = async () => {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/posts")
            response = await response.json()
            setData(response)
        } catch (error) {
            console.log(error, 'Error While Fetching data list');
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <DataList data={data} />
}