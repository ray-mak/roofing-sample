"use client"
import {
  faArrowLeftLong,
  faArrowRightLong,
  faQuoteLeft,
  faQuoteRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"

const reviews = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec purus eget ipsum laoreet suscipit at vitae arcu.",
    author: "Romeo G",
  },
  {
    id: 2,
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    author: "Julia A",
  },
  {
    id: 3,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    author: "Mark L",
  },
  {
    id: 4,
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer id arcu in quam aliquam tincidunt.",
    author: "Sophia K",
  },
  {
    id: 5,
    text: "Maecenas volutpat lacus ac tellus ullamcorper, quis tincidunt nulla vehicula. Proin blandit felis sit amet dui egestas, non malesuada enim cursus.",
    author: "David R",
  },
  {
    id: 6,
    text: "Praesent pharetra nulla sit amet nulla interdum, sed scelerisque erat fermentum. In laoreet enim quis risus feugiat suscipit.",
    author: "Emma W",
  },
]

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(1)

  const nextSlide = () => {
    setCurrentIndex((index) => {
      if (index === reviews.length / itemsPerSlide - 1) {
        return 0
      } else {
        return index + 1
      }
    })
  }

  const prevSlide = () => {
    setCurrentIndex((index) => {
      if (index === 0) {
        return reviews.length / itemsPerSlide - 1
      } else {
        return index - 1
      }
    })
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsPerSlide(2)
      } else {
        setItemsPerSlide(1)
      }
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const chunkReviews = (reviews: any, itemsPerSlide: number) => {
    const chunked = []
    for (let i = 0; i < reviews.length; i += itemsPerSlide) {
      chunked.push(reviews.slice(i, i + itemsPerSlide))
    }
    return chunked
  }

  const chunkedReviews = chunkReviews(reviews, itemsPerSlide)

  return (
    <div className="flex flex-col items-center justify-center py-20 gap-12">
      <h2 className="text-white font-bold text-4xl text-center">
        What People Are Saying
      </h2>

      <div className="relative w-full md:w-5/6 lg:w-3/4 lg:max-w-6xl px-6 md:px-0">
        <button
          className="absolute -top-10 md:top-1/2 left-8 md:-left-12 lg:-left-20 text-gray-300"
          onClick={prevSlide}
          aria-label="see previous slide of reviews"
        >
          <FontAwesomeIcon icon={faArrowLeftLong} size="xl" />
        </button>
        <button
          className="absolute -top-10 md:top-1/2 right-8 md:-right-12 lg:-right-20 text-gray-300"
          onClick={nextSlide}
          aria-label="see next slide of reviews"
        >
          <FontAwesomeIcon icon={faArrowRightLong} size="xl" />
        </button>

        <div className="relative flex w-full overflow-hidden">
          {chunkedReviews.map((reviewSet, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex-grow-0 w-full grid grid-cols-1 md:grid-cols-2 gap-10"
              style={{
                translate: `${-100 * currentIndex}%`,
                transition: "translate 300ms",
              }}
            >
              {reviewSet.map((review: any) => (
                <div
                  key={review.id}
                  className="relative h-full flex flex-col items-center gap-4 border border-zinc-700 bg-zinc-900 p-8 "
                >
                  <div className="absolute left-3 top-3 opacity-60">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="text-4xl text-gray-200"
                    />
                  </div>
                  <div className="absolute right-3 top-3 opacity-60">
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className="text-4xl text-gray-200"
                    />
                  </div>
                  <p className="text-center text-gray-300 text-sm flex-grow mt-2">
                    {review.text}
                  </p>
                  <div className="flex gap-1">
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#FFD43B" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#FFD43B" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#FFD43B" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#FFD43B" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="text-xl font-semibold text-gray-300">
                    {review.author}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReviewsSection
