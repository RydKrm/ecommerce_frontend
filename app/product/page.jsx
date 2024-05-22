"use client"
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

const Product = () => {

  const handleClick = (e) => {
    console.log("testing");
  }

  return (
    <div> 
      <h2>Product</h2> 
      <Button className="my-4" onClick={handleClick}>
        <Link href='/product/add_product'>
          Add product
        </Link>
      </Button>
    </div>
  );
};

export default Product;
