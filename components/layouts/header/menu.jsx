import Image from 'next/image';
import React from 'react';
import { RiHeadphoneLine } from 'react-icons/ri';
import { TbCategory } from 'react-icons/tb';

const Menu = ({ setShowMenu }) => {
  return (
    <nav className="container mx-auto mt-3 border py-3 border-gray-200 flex flex-row place-content-between px-10 mb-5">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h2 className="font-bold text-green-500 text-xl">888 - 1900</h2>
          <p className="text-xs text-gray-500 -mt-1">24/7 Support Center</p>
        </div>
        <RiHeadphoneLine className="text-4xl font-extrabold ms-1 text-gray-700" />
      </div>

      {/* Menu Start here */}

      <div className="flex flex-row place-content-stretch">
        <ul className="flex gap-x-8 text-bold text-gray-600 mt-2">
          <li>Home</li>
          <li>Product</li>
          <li>Blog</li>
          <li
            onMouseEnter={() => {
              setShowMenu(true);
            }}
            onMouseLeave={() => {
              setShowMenu(false);
            }}
          >
            Mega Menu
          </li>
          <li>About</li>
          <li>Deals</li>
          <button className="flex flex-row place-content-between px-5 bg-primary -mt-1 text-white text-sm w-48 h-10 rounded-md pt-2">
            <p>Category Browser </p>
            <TbCategory className="mt-1 font-medium" />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
