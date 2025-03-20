import { useRef } from "react"

const getCurrentTimeStamp = () => Math.floor(Date.now() / 1000)

const useCache = (key: string, expirationInSec: number) => {
    const cache = useRef(JSON.parse(localStorage.getItem(key)) || {})

    const setCache = (query: string, data: object) => {
        const timeStamp = getCurrentTimeStamp()
        if (cache.current) {
            cache.current[query] = { data, timeStamp }
        }
        localStorage.setItem(key, JSON.stringify(cache.current))
    }

    const getCache = (query: string) => {
        const cachedData = cache.current[query]
        if (cachedData) {
            const { data, timeStamp } = cachedData
            if (getCurrentTimeStamp() - timeStamp < expirationInSec) {
                return data
            } else {
                delete cache.current[query]
                localStorage.setItem(key, JSON.stringify(cache.current))
            }
        }
        return null
    }

    return {getCache, setCache}
}

export default useCache