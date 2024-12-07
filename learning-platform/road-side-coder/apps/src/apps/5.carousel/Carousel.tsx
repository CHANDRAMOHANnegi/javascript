import { ReactElement, useEffect, useRef, useState } from "react"

type Image = {
    id: number
    url: string
    title: string
}

type CarouselProps = {
    images: Image[],
    imageLimit?: number
    imagesPerSlide?: number
    isLoading?: boolean
    customPrevButton?: (cb: () => void) => ReactElement
    customNextButton?: (cb: () => void) => ReactElement
    onImgClick?: (image: Image, index: number) => ReactElement
}

export const Carousel = ({
    images = [],
    isLoading = false,
    imageLimit = images.length,
    customNextButton,
    customPrevButton,
    imagesPerSlide = 2,
    onImgClick
}: CarouselProps) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [imageWidth, setImageWidth] = useState(0)

    const imgRef = useRef(null)

    useEffect(() => {
        if (images.length) {
            setCurrentIndex(0)
        }
    }, [images])

    if (isLoading) {
        return <>...loading</>
    }

    function goToPrev() {
        setCurrentIndex(idx => idx === 0 ? 0 : idx - 1)
    }
    const maxIndex = Math.ceil(Math.min(imageLimit, images.length) / imagesPerSlide) - 1;
    function goToNext() {
        setCurrentIndex(idx => (idx === maxIndex ? idx : idx + 1));
    }

    return (
        <div className="carousel"
            style={{ width: imageWidth ? imageWidth * imagesPerSlide : "auto" }}>
            <div className="image-container"
                style={{
                    transform: `translateX(-${currentIndex * imageWidth}px)`,
                }}
            >
                {images.slice(0,
                    imageLimit > images.length ?
                        images.length : imageLimit
                ).map((image, index) => {
                    return (
                        <img
                            onLoad={() => imgRef?.current?.offsetWidth && setImageWidth(imgRef?.current?.offsetWidth)}
                            key={image.id}
                            src={image.url}
                            alt={image.title}
                            onClick={() => onImgClick?.(image, index)}
                            ref={imgRef}
                            className="image"
                        />
                    )
                })}
            </div>
            {customPrevButton ?
                customPrevButton(goToPrev) :
                <button className={`btn prev ${currentIndex === 0 ? "bg-slate-400" : "bg-slate-100"} `} onClick={goToPrev}>Prev</button>}
            {customNextButton ?
                customNextButton(goToNext) :
                <button className={`btn next ${currentIndex === maxIndex ? "bg-slate-400" : "bg-slate-100"} `} onClick={goToNext}>Next</button>}
        </div>
    )
}
