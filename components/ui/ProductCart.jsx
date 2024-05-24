import Image from 'next/image';
import React from 'react';
import Button from './Button';
import { IoCartOutline } from 'react-icons/io5';

const ProductCart = ({ product, color }) => {
  return (
    <div className="border-[.5px] border-gray-200 w- rounded-lg pb-5">
      <h2
        className={`w-14 h-7 text-white rounded-tr-lg rounded-bl-lg text-small content-center ps-4 ml-auto ${
          product?.tag ? color : 'bg-white'
        }
        `}
      >
        {product?.tag}
      </h2>
      <Image
        className="h-36 w-36 mx-auto"
        src={product.image}
        alt="image here"
        width={1000}
        height={1000}
      />
      <div className="ms-5">
        <h5 className="text-gray">{product.category}</h5>
        <h3 className="font-bold text-[14px] text-gray-700 mr-14">
          {product?.name}
        </h3>
        <h3 className="text-gray flex me-1 mt-1">
          By{' '}
          <p className="ms-1 text-small text-green-500 hover:text-hover">
            {product.brand}
          </p>
        </h3>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <h2 className="text-bold text-[16px] text-green-600">
              ${product.price}
            </h2>
            <h5 className="text-small line-through font-bold text-gray-400">
              ${product.previousPrice}.23
            </h5>
          </div>
          <Button className="flex flex-row me-7 " size="cart" variant="cart">
            <IoCartOutline className="w-4 h-4 me-1 mt-[2px] " />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
