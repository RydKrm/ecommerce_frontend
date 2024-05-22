import HorizontalCart from '@/components/ui/HorizontalCart';
import React from 'react';
import { color } from './CategorySlider';

const Banner = () => {
  const bannerInfo = [
    {
      text: 'Make your Breakfast Healthy and Easy',
      buttonText: 'Shop now',
      image: '/images/banner/banner-1.png',
    },
    {
      text: 'Everyday Fresh Clean with OurProducts',
      buttonText: 'Shop now',
      image: '/images/banner/banner-2.png',
    },
    {
      text: 'Make your Breakfast health and Easy',
      buttonText: 'Shop now',
      image: '/images/banner/banner-3.png',
    },
    {
      text: 'Make your Breakfast health and Easy',
      buttonText: 'Shop now',
      image: '/images/banner/banner-3.png',
    },
  ];

  color;

  return (
    <div className="container mx-auto flex flex-row md:flex-col">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mb-5 gap-x-4 ">
        {bannerInfo.map((item, index) => (
          <HorizontalCart
            key={item.buttonText}
            info={item}
            color={color[index % color.length]}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
