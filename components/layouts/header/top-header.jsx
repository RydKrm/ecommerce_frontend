import Link from "next/link";
import React from "react";

const TopHeader = () => {
  return <div className="w-[90%] mx-auto my-3 place-content-between flex flex-row font-normal text-slate-600">
    <ul className="flex flex-row space-x-4  text-[13px] divide-x ps-3">
        <li><Link  className="ms-2" href={`about_us`}>About us</Link></li>
        <li><Link className="ms-2" href={`about_us`}>My Account</Link></li>
        <li><Link className="ms-2" href={`about_us`}>Wishlist</Link></li>
        <li><Link className="ms-2" href={`about_us`}>Order Tracking</Link></li>
    </ul>

    <p className="text-[13px]">Save more with coupons </p>

    <ul className="flex space-x-4 text-[13px] divide-x">
        <li><Link className="ms-2" href={`about_us`}>Need Help? Call Us</Link></li>
        <li><Link className="ms-2" href={`about_us`}>+123 4124</Link></li>
        <li><Link className="ms-2" href={`about_us`}>My Account</Link></li>
        <li><Link className="ms-2" href={`about_us`}>Wishlist</Link></li>
    </ul>

  </div>;
};

export default TopHeader;
