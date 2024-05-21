import Image from "next/image";
import React from "react";

const LineCart = ({ product }) => {
  return (
    <div className="flex flex-row hover:-translate-y-1 transition-all duration-500 mb-3">
      <div className="bg-gray-800">
        <Image
          className="h-20 w-20 bg-gray-400"
          src={product.image}
          alt="Product here"
          height={100}
          width={100}
        />
      </div>
      <div className="flex flex-col ms-5 mt-2">
        <h2 className="text-h5 text-[13px]">{product.name}</h2>
        <div className="flex flex-row">
          <h4 className="text-green"> ${product.price}</h4>
          <h3 className="line-through me-2 text-small mt-1 ms-2 text-gray-400 font-semibold">
            ${product.previousPrice}.35
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LineCart;
