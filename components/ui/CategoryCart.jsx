import Image from "next/image";
import React from "react";

const CategoryCart = ({ color, item }) => {
  console.log(`bg-[${color}]`);
  return (
    <div className={`bg-[${color}] relative content-center items-center`}>
      <Image
        className="h-48 w-32"
        src={item.image}
        alt="image here"
        height={100}
        width={100}
      />
      <h4>{item?.name}</h4>
      <h5>{item?.total}</h5>
    </div>
  );
};

export default CategoryCart;
