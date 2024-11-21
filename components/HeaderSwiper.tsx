"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Button } from "./ui/button";

export default function HeaderSwiper() {
  return (
    <div>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        // modules={[Pagination]}
        className="mySwiper mt-5"
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="flex w-full items-center justify-between gap-x-24 rounded-2xl bg-secondary px-28 py-10">
            <div className="flex w-full flex-col">
              <h2 className="text-5xl font-semibold text-foreground">
                Element Pass Genesis
              </h2>
              <p className="mt-2 text-foreground">
                Element Pass Genesis is a growing NFT collection based on
                product highlights, user capacity, and ecological expansion.
              </p>
              <Button className="ml-auto mt-4 rounded-lg px-20 py-6 font-semibold text-foreground">
                Buy
              </Button>
            </div>
            <div className="flex w-full items-center justify-end">
              <div className="relative h-[9em] overflow-hidden rounded-xl text-[40px]">
                <img
                  src="https://s.nfte.so/asset/collection/featured/feeecf10-da93-4d16-8320-ba1f1b272e1b.jpeg"
                  alt="Element Pass Genesis"
                  className="h-full w-full"
                />
                <div className="absolute bottom-0 left-0 flex w-full items-center gap-x-2 rounded-lg bg-gradient p-4">
                  <img
                    src="https://s.nfte.so/asset/collection/featured/feeecf10-da93-4d16-8320-ba1f1b272e1b.jpeg"
                    alt=""
                    className="h-12 w-12"
                  />
                  <p className="text-xl font-bold">Honey Bastarnds</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full items-center justify-between gap-x-24 rounded-2xl bg-secondary px-28 py-10">
            <div className="flex w-full flex-col">
              <h2 className="text-5xl font-semibold text-foreground">
                Element Pass Genesis
              </h2>
              <p className="mt-2 text-foreground">
                Element Pass Genesis is a growing NFT collection based on
                product highlights, user capacity, and ecological expansion.
              </p>
              <Button className="ml-auto mt-4 rounded-lg px-20 py-6 font-semibold text-foreground">
                Buy
              </Button>
            </div>
            <div className="flex w-full items-center justify-end">
              <div className="relative h-[9em] overflow-hidden rounded-xl text-[40px]">
                <img
                  src="https://s.nfte.so/asset/collection/featured/feeecf10-da93-4d16-8320-ba1f1b272e1b.jpeg"
                  alt="Element Pass Genesis"
                  className="h-full w-full"
                />
                <div className="absolute bottom-0 left-0 flex w-full items-center gap-x-2 rounded-lg bg-gradient p-4">
                  <img
                    src="https://s.nfte.so/asset/collection/featured/feeecf10-da93-4d16-8320-ba1f1b272e1b.jpeg"
                    alt=""
                    className="h-12 w-12"
                  />
                  <p className="text-xl font-bold">Honey Bastarnds</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full items-center justify-between gap-x-24 rounded-2xl bg-secondary px-28 py-10">
            <div className="flex w-full flex-col">
              <h2 className="text-5xl font-semibold text-foreground">
                Element Pass Genesis
              </h2>
              <p className="mt-2 text-foreground">
                Element Pass Genesis is a growing NFT collection based on
                product highlights, user capacity, and ecological expansion.
              </p>
              <Button className="ml-auto mt-4 rounded-lg px-20 py-6 font-semibold text-foreground">
                Buy
              </Button>
            </div>
            <div className="flex w-full items-center justify-end">
              <div className="relative h-[9em] overflow-hidden rounded-xl text-[40px]">
                <img
                  src="https://s.nfte.so/asset/collection/featured/feeecf10-da93-4d16-8320-ba1f1b272e1b.jpeg"
                  alt="Element Pass Genesis"
                  className="h-full w-full"
                />
                <div className="absolute bottom-0 left-0 flex w-full items-center gap-x-2 rounded-lg bg-gradient p-4">
                  <img
                    src="https://s.nfte.so/asset/collection/featured/feeecf10-da93-4d16-8320-ba1f1b272e1b.jpeg"
                    alt=""
                    className="h-12 w-12"
                  />
                  <p className="text-xl font-bold">Honey Bastarnds</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
