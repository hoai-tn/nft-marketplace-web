"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function HeaderSwiper() {
  return (
    <div>
      <Swiper
        pagination={{ clickable: true }}
        // modules={[Pagination, Autoplay]}
        modules={[Pagination]}
        className="mySwiper mt-5"
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="flex w-full items-center justify-between gap-x-20 rounded-lg bg-secondary p-14">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Element Pass Genesis
              </h2>
              <p className="mt-2 text-sm text-gray-300">
                Element Pass Genesis is a growing NFT collection based on
                product highlights, user capacity, and ecological expansion.
              </p>
              <button className="mt-4 rounded-lg bg-white px-4 py-2 font-semibold text-secondary">
                Buy
              </button>
            </div>
            <div className="flex w-full items-center justify-end overflow-hidden">
              <div className="relative h-[9em] rounded-lg text-[40px]">
                <img
                  src="https://s.nfte.so/asset/collection/featured/feeecf10-da93-4d16-8320-ba1f1b272e1b.jpeg"
                  alt="Element Pass Genesis"
                  className="h-full w-full rounded-lg"
                />
                <div className="bg-gradient absolute bottom-0 left-0 flex w-full items-center gap-x-2 p-4">
                  <img
                    src="https://s.nfte.so/asset/collection/featured/feeecf10-da93-4d16-8320-ba1f1b272e1b.jpeg"
                    alt=""
                    className="h-12 w-12 rounded-lg"
                  />
                  <p className="text-2xl">Honey Bastarnds</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-red-200 text-foreground">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="bg-gray-600 text-foreground">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="bg-secondary text-foreground">
          Slide 3
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
