import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { IoIosGitCompare, IoIosHeartEmpty } from "react-icons/io";

import logo from "../../../public/logo.svg";

const SearchBar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between py-2 px-6 h-16 mt-2 border-t border-gray-300 pt-5">
      <div className="flex items-center">
        <Image
          width={100}
          height={100}
          src={logo}
          alt="Nest Mart & Grocery"
          className="h-20 w-32"
        />
      </div>

      <div className=" space-x-6 border border-green-400 h-10 mt-2 rounded">
        <div className="flex items-center h-10 content-center ">
          <div className="relative">
            <input
              type="text"
              className="pl-10 pr-4 rounded-sm w-[450px] text-sm focus:outline-none"
              placeholder="Search for items"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs font-thin" />
          </div>
          <button className=" px-3 py-3 text-xs outline-offset-0 bg-green-500 text-white">
            Searching Trending
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4">
          <GoPerson className="text-gray-600 font-medium text-xl" />
          <span>Account</span>
        </div>
        <div className="relative flex items-center space-x-2">
          <IoCartOutline className="text-gray-600 font-medium text-xl" />
          <span>Cart</span>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center h-5 w-5 text-xs font-bold leading-none text-white bg-green-600 rounded-full">
            2
          </span>
        </div>
        <div className="relative flex items-center space-x-2">
          <IoIosHeartEmpty className="text-gray-600 font-medium text-xl" />
          <span>Wishlist</span>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center h-5 w-5 text-xs font-bold leading-none text-white bg-green-600 rounded-full">
            6
          </span>
        </div>
        <div className="relative flex items-center space-x-2">
          <IoIosGitCompare className="text-gray-600  font-medium text-xl" />
          <span>Compare</span>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center h-5 w-5 text-xs font-bold leading-none text-white bg-green-600 rounded-full">
            3
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
