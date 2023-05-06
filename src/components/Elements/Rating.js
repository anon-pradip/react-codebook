import React from 'react'
import { StarIcon } from "@heroicons/react/24/outline"

const Rating = ({ rating }) => {
  let ratingArray = Array(5).fill(false)
  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true
  }
  return (
    <>
      {ratingArray.map((value, index) => (
        value ? (
          <StarIcon height={20} width={20} className=' fill-yellow-500 text-yellow-500' key={index} />

        ) : (
          <StarIcon height={20} width={20} className='' key={index} />
        )
      ))}
    </>
  )
}

export default Rating