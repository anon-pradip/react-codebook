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
          <StarIcon height={20} width={20} className=' text-white fill-yellow-600' key={index} />

        ) : (
          <StarIcon height={15} width={15} className=' text-yellow-500 fill-white' key={index} />
        )
      ))}
    </>
  )
}

export default Rating