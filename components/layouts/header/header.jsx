import Image from "next/image";
import Link from "next/link";
import React from "react";
import TopHeader from "./top-header";

const Header = () => {
  return (  <>
   <TopHeader/>
    <nav className=" p-4 flex items-center justify-between">
    <div className="flex items-center">
        <Image src="../../public/next.svg" height={30} width={40} alt="Logo" className="h-8 mr-4" />
        <ul className="flex space-x-4">
            <li><Link href="/home" className="text-black hover:text-gray-300">Home</Link></li>
            <li><Link href="/product" className="text-black hover:text-gray-300">Products</Link></li>
            <li><Link href="/aboutus" className="text-black hover:text-gray-300">About Us</Link></li>
        </ul>
    </div>
    <div className="flex items-center space-x-4">
        <div className="relative">
            <span className="text-white cursor-pointer">🔔</span>
            <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-2">3</span>
        </div>
        <div className="relative">
            <span className="text-white cursor-pointer">🛒</span>
            <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-2">2</span>
        </div>
    </div>
  </nav>
    </>)
  
};

export default Header;
