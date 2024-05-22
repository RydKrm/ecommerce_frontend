import React from 'react';
import { productList } from './Product';
import LineCart from '@/components/ui/LineCart';

const TopProduct = () => {
  const productList4 = productList.slice(0, 4);
  const productList8 = productList.slice(4, 8);
  return (
    <div className="container grid grid-cols-2 lg:grid-cols-4 gap-4 my-20">
      <div className="flex flex-col">
        <h2 className="text-h4 border-b-[.2px] border-gray-200 pb-2">
          Trending Products
        </h2>
        {productList4.map((item) => (
          <LineCart key={item._id} product={item} />
        ))}
      </div>
      <div className="flex flex-col ms-4">
        <h2 className="text-h4 border-b-[.2px] border-gray-200 pb-2">
          Top Selling
        </h2>
        {productList8.map((item) => (
          <LineCart key={item._id} product={item} />
        ))}
      </div>
      <div className="flex flex-col ms-4">
        <h2 className="text-h4 border-b-[.2px] border-gray-200 pb-2">
          Recently added
        </h2>
        {productList4.map((item) => (
          <LineCart key={item._id} product={item} />
        ))}
      </div>
      <div className="flex flex-col ms-4">
        <h2 className="text-h4 border-b-[.2px] border-gray-200 pb-2">
          Top Rated
        </h2>
        {productList8.map((item) => (
          <LineCart key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default TopProduct;
