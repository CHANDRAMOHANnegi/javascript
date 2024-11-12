import { useEffect, useState } from "react"
import { Carousel } from "./Carousel"
import "./style.css"

const getUrl = (limit) => `https://jsonplaceholder.typicode.com/photos?_limit=${limit}`

export const CarouselApp = () => {
    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState([])

    const fetchImages = async (limit) => {
        setLoading(true)
        try {
            const response = await fetch(getUrl(limit))
            const images = await response.json()

            setImages(images)
        } catch (error) {
            console.log("error", error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchImages(8)
    }, [])

    return (
        <div className="carousel-container mt-5">
            <Carousel
                images={images}
                isLoading={loading}
            />
        </div>
    )
}
