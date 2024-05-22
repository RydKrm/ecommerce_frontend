import Image from 'next/image';
import React from 'react';

const CategoryCart = ({ color, item }) => {
  return (
    <div
      className={`${color} flex flex-col rounded-xl content-center items-center mt-5 pb-5 pt-5 h-40 w-40 ms-8`}
    >
      <Image
        className="h-16 w-16"
        src={item.image}
        alt="image here"
        height={100}
        width={100}
      />
      <h4 className="text-bold">{item?.name}</h4>
      <h5 className="text-small">{item?.total}</h5>
    </div>
  );
};

export default CategoryCart;
