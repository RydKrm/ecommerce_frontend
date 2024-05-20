"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const slides = [
  {
    bigText: `Fresh Vegetables
                  <br />
                  Big discount`,
    smallText: "Save up to 50% off on your first order",
    image: "/images/slider/slider-1.png",
  },
  {
    bigText: `Fresh Vegetables
                  <br />
                  Big discount`,
    smallText: "Save up to 60% off on your second order",
    image: "/images/slider/slider-2.png",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative overflow-hidden w-[92%] mx-auto mb-5">
        <div
          className="flex transition delay-700 duration-300 ease-in-out"
          // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* {slides.map((slide, index) => ( */}
          <div className="w-full flex-shrink-0">
            <Image
              width={1000}
              height={1000}
              // src={slide.image}
              src={slides[currentIndex].image}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-auto"
            />
            <div className=" text-center lg:text-left absolute bottom-1/4 right-10 ">
              <h1
                className="text-6xl font-bold text-slate-800 mb-4"
                dangerouslySetInnerHTML={{
                  __html: slides[currentIndex].bigText,
                }}></h1>
              <p className="text-xl text-gray-500 mb-6">
                {slides[currentIndex].smallText}
              </p>
              <div className="flex justify-center lg:justify-start">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-green-500 rounded-l-full focus:outline-none "
                  />
                  <button className=" bg-green-500 text-white px-6 py-3 rounded-r-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* 2nd slider */}
          </div>
          {/* ))} */}
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* <div className="bg-green-100 py-12 w-[90%] ">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className=" flex items-center justify-center lg:justify-start mb-8 lg:mb-0 background-image">
            <Image
            height={100}
            width={100}
            src={slider1}
            alt="Fresh Vegetables"
            className="rounded-lg shadow-lg w-full"
          />
          </div>
          <div className=" text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Fresh Vegetables
              <br />
              Big discount
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Save up to 50% off on your first order
            </p>
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 pr-12 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="absolute right-0 top-0 mt-2 mr-2 text-green-500">
                  <FaPaperPlane />
                </button>
              </div>
              <button className="ml-4 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            width={100}
            height={100}
            alt="slider one"
            src={slider1}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            width={100}
            height={100}
            alt="slider one"
            src={slider2}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Slider;
