import Image from "next/image";
import React from "react";
const SubscribeSection = () => {
  return (
    <div className="container relative w-[90%] h-96 rounded-lg subscribe_header mb-16">
      <Image
        className="absolute bottom-0 left-7 z-10 w-64 h-36 lg:h-64 lg:w-[450px] "
        src="/images/banner/banner-9.png"
        alt="Image here"
        height={1000}
        width={1000}
      />
      <h2 className="text-gray-700 text-4xl text-bold text-right absolute top-20 right-8">
        Stay home & get your daily
        <br /> needs from our shop
      </h2>
      <p className="text-gray-600 font-medium absolute top-44 right-8">
        Start You r Daily Shopping with Nest Mart
      </p>
      <div className="flex absolute top-56 right-8">
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
  );
};

export default SubscribeSection;
