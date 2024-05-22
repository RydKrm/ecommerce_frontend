import Image from 'next/image';
import React from 'react';

const PolicyCart = ({ policy }) => {
  return (
    <div className="bg-[#F4F6FA] rounded-md w-60 lg:w-52 h-32 flex flex-row group">
      <Image
        className="w-12 ms-5 lg:ms-4 group-hover:-translate-y-3 transition-all duration-500"
        src={policy.image}
        alt="Image Here"
        height={100}
        width={100}
      />
      <div className="flex flex-col ms-6 lg:ms-3 mt-8 me-3 ">
        <h2 className="text-bold text-[17px]">{policy.title}</h2>
        <p className="text-gray text-[14px]">{policy.text}</p>
      </div>
    </div>
  );
};

export default PolicyCart;
