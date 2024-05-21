import ProductCart from "@/components/ui/ProductCart";
import React from "react";
import { color } from "./CategorySlider";
export const productList = [
  {
    _id: 1,
    tag: "New",
    name: "Angie Boomchickapop Sweet & Salty Kettle Corn",
    image: "/images/products/product-1-1.jpg",
    back_image: "/images/products/product-1-2.jpg",
    category: "Snack",
    rating: 4,
    brand: "StarKist",
    previousPrice: 32,
    price: 28.85,
  },
  {
    _id: 2,
    tag: "Sale",
    name: "All Natural Italian-Style Chicken Meatballs",
    image: "/images/products/product-2-1.jpg",
    back_image: "/images/products/product-2-2.jpg",
    category: "Snack",
    rating: 3.5,
    brand: "StarKist",
    previousPrice: 46,
    price: 38.85,
  },
  {
    _id: 3,
    tag: "Hot",
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    image: "/images/products/product-5-1.jpg",
    back_image: "/images/products/product-5-2.jpg",
    category: "Hot Food",
    rating: 4,
    brand: "StarKist",
    previousPrice: 32,
    price: 28.85,
  },
  {
    _id: 10,
    name: "Angie Boomchickapop Sweet & Salty Kettle Corn",
    image: "/images/products/product-3-1.jpg",
    back_image: "/images/products/product-3-2.jpg",
    category: "Snack",
    rating: 4,
    brand: "StarKist",
    previousPrice: 32,
    price: 28.85,
  },
  {
    _id: 4,
    name: "Angie Boomchickapop Sweet & Salty Kettle Corn",
    image: "/images/products/product-4-1.jpg",
    back_image: "/images/products/product-4-2.jpg",
    category: "Snack",
    rating: 4,
    brand: "StarKist",
    previousPrice: 32,
    price: 28.85,
  },
  {
    _id: 5,
    name: "Angie Boomchickapop Sweet & Salty Kettle Corn",
    image: "/images/products/product-5-1.jpg",
    tag: "Hot",
    back_image: "/images/products/product-5-2.jpg",
    category: "Snack",
    rating: 4,
    brand: "StarKist",
    previousPrice: 32,
    price: 28.85,
  },
  {
    _id: 6,
    name: "Angie Boomchickapop Sweet & Salty Kettle Corn",
    image: "/images/products/product-6-1.jpg",
    back_image: "/images/products/product-6-2.jpg",
    tag: "Sale",
    category: "Snack",
    rating: 4,
    brand: "StarKist",
    previousPrice: 32,
    price: 28.85,
  },
  {
    _id: 7,
    name: "Angie Boomchickapop Sweet & Salty Kettle Corn",
    image: "/images/products/product-7-1.jpg",
    back_image: "/images/products/product-7-2.jpg",
    category: "Snack",
    rating: 4,
    brand: "StarKist",
    previousPrice: 32,
    price: 28.85,
  },
  {
    _id: 8,
    name: "Angie Boomchickapop Sweet & Salty Kettle Corn",
    image: "/images/products/product-8-1.jpg",
    back_image: "/images/products/product-8-2.jpg",
    tag: "Sale",
    category: "Snack",
    rating: 4,
    brand: "StarKist",
    previousPrice: 32,
    price: 28.85,
  },
  {
    _id: 9,
    name: "Angie Boomchickapop Sweet & Salty Kettle Corn",
    image: "/images/products/product-9-1.jpg",
    back_image: "/images/products/product-9-2.jpg",
    category: "Snack",
    rating: 4,
    brand: "StarKist",
    previousPrice: 32,
    price: 28.85,
  },
];

export const productColor = [
  "bg-[#29A56C]",
  "bg-[#67BCEE]",
  "bg-[#F74B82]",
  "bg-[#F59758]",
];

const Product = () => {
  return (
    <div className="container mx-auto mb-5">
      <h2 className="text-h2 -mt-4 mb-3">Popular Products</h2>
      <ul className="flex text-h5 gap-x-3">
        <li className="field-hover">Cake & Milk</li>
        <li className="field-hover">Snack & Teas</li>
        <li className="field-hover">Pet Foods</li>
        <li className="field-hover">Vegetables</li>
      </ul>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 mt-5 gap-x-4 gap-y-8">
        {productList.map((product, index) => (
          <ProductCart
            key={product._id}
            product={product}
            color={productColor[index % productColor.length]}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
