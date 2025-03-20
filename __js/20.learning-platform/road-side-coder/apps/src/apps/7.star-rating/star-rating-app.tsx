import React, { useState } from 'react'
import { StarRating } from './star-rating'
import "./star.css"

export const StarRatingApp = ({ initialRating = 3 }) => {
  const [rating, setRating] = useState(initialRating)

  const handleRatingChange = (newRating: number) => {
    setRating(newRating)
  }

  return (
    <div>
      <h2>Star Rating</h2>
      <StarRating
        size={5}
        rating={rating}
        onChange={handleRatingChange}
      />
      <p>Current Rating {rating}</p>
    </div>
  )
}
