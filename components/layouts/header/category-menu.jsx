import Image from "next/image";
import React from "react";
import image from "../../../public/images/banner-menu.png";

const SingleItem = ({ list, header }) => {
  return (
    <div className="flex flex-col text-black">
      <h3 className="text-lg font-semibold text-green-500 mb-2">{header}</h3>
      <ul className="text-sm text-gray-600">
        {list.map((item) => (
          <li key={item} className="my-2 ms-1 font-normal text-gray-500">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const list1 = [
  "Fresh Vegetables Exotic",
  "Herbs & Seasonings",
  "Cuts & Sprouts",
  "Fruits & Veggies",
  "Milk and dairy",
];

const list2 = [
  "Milk & Flavoured Milk",
  "Butter and Margarine",
  "Cuts & Sprouts",
  "Egg Substitutes",
  "Sour Cream",
  "cheese",
];

const list3 = [
  "Breakfast Sausage",
  "Dinner Sausage",
  "Cuts & Sprouts",
  "Chicken",
  "Wild Caught Filters",
  "Milk and dairy",
];

const header1 = "Fruit & Vegetables";
const header2 = "Breakfast & Dairy";
const header3 = "Meat & Seafood";

const CategoryMenu = () => {
  return (
    <div className="flex flex-row mx-auto w-[97%] py-10 bg-white place-content-evenly absolute z-20">
      <SingleItem header={header1} list={list1} />
      <SingleItem header={header2} list={list2} />
      <SingleItem header={header3} list={list3} />
      <div>
        <h2 className="text-lg font-semibold text-green-500 mb-4">
          Our Pride For Best Food
        </h2>
        <Image
          height={100}
          width={100}
          className="h-20 w-44"
          src={image}
          alt="Mega menu image"
        />
        <p className="text-xs text-gray-500 w-48 mt-3">
          We provided best food for all people. Visit our shop at any time. Get
          All type of food here
        </p>
      </div>
    </div>
  );
};

export default CategoryMenu;
