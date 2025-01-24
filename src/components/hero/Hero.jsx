"use client"

import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import Image from "next/image"

//css
import style from "./hero.module.css"

//components
import SearchBooking from "@/components/Booking/searchBooking"

export default function SliderIndicatorsOutside() {
  useEffect(() => {
    const slider = new Glide(".glide-05", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Slider with indicators outside --> */}
      <div className="relative w-full glide-05">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <Image
                src="https://Tailwindmix.b-cdn.net/image-03.jpg"
                className={`${style.imageSize}`}
                alt="image1"
                width={300}
                height={300}
              />
            </li>
            <li>
              <Image
                src="https://Tailwindmix.b-cdn.net/image-04.jpg"
                className={`${style.imageSize}`}
                alt="image1"
                width={300}
                height={300}
              />
            </li>
            <li>
              <Image
                src="https://Tailwindmix.b-cdn.net/image-05.jpg"
                className={`${style.imageSize}`}
                alt="image1"
                width={300}
                height={300}
              />
            </li>
            <li>
              <Image
                src="https://Tailwindmix.b-cdn.net/image-01.jpg"
                className={`${style.imageSize}`}
                alt="image1"
                width={300}
                height={300}
              />
            </li>
            <li>
              <Image
                src="https://Tailwindmix.b-cdn.net/image-02.jpg"
                className={`${style.imageSize}`}
                alt="image1"
                width={300}
                height={300}
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="flex items-center justify-center w-full gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
        </div>
      </div>

      {/* Booking reserve form */}
      <div className="searchBooking absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <SearchBooking/>
      </div>
      {/*<!-- End Slider with indicators outside --> */}
    </>
  )
}