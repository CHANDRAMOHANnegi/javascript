import { useState } from "react";
import "./star.css"

type RatingProps = {
    rating: number
    onChange?: (rate: number) => void
    size?: number,
    hoverable?: boolean
}

export const StarRating = ({
    onChange,
    rating,
    size = 5,
    hoverable
}: RatingProps) => {
    // console.log(size);
    const [hoveredRating, setHoveredValue] = useState(0)

    const handleHoveredRating = (hoveredIndex) => {
        hoverable && setHoveredValue(hoveredIndex)
    }

    return (
        <div className="star-container">
            {[...Array(size)].map((_, idx) => {
                const starValue = idx + 1
                let starClass = "star"
                if (hoveredRating >= starValue) {
                    starClass += " hover"
                }
                if (rating >= starValue) {
                    starClass += " active"
                }

                return <button onClick={() => onChange?.(starValue)}
                    key={idx}
                    /****
                     * on mouse enter 
                     * on mouse leave
                     * ***/
                    onMouseLeave={() => handleHoveredRating(0)}
                    onMouseEnter={() => handleHoveredRating(idx + 1)}
                    className={starClass}
                >&#9733;</button>
            })}
        </div>
    )
}
