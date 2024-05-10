'use client'
import { Button } from "@/components/ui/button";
import InputField from "@/components/ui/inputField";
import SelectField from "@/components/ui/selectField";
import React, { useState } from "react";

const AddProduct = () => {

  const [product,setProduct] = useState(null);
  

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("Testing", product)
  }

  const handleProduct = (e)=>{
    setProduct({...product,[e.target.name]:e.target.value})
  }

  const dataList = [
    {label:"Product_1",value:"1827431abc7a48a"},
    {label:"Product_2",value:"1827431abc7a48b"},
    {label:"Product_3",value:"1827431abc7a48d"},
    {label:"Product_4",value:"1827431abc7a483"},
    {label:"Product_5",value:"1827431abc7a48a6"},
  ]

  return (
    <form>
     <div className="w-2/3 content-center flex items-center justify-center my-8"> 
      <div className="flex flex-col mt-5 gap-2">
        <InputField name="firstName" type="text" 
        label="First Name" handler={handleProduct} 
        option={{required:true,max:18,min:3, pattern: /^[A-Za-z]+$/i,}}/>
        <InputField name="lastName" type="text" label="Last Name" handler={handleProduct} style="ghost"/>
        <InputField name="email" type="email" label="email" handler={handleProduct} style="ghost"/>
        <InputField name="image" type="file" label="Product Image" handler={handleProduct} style="ghost"/>
        <SelectField handler={handleProduct} list={dataList} label="Product list" name="product" />
      <Button onClick={handleSubmit} >Submit </Button>
      </div>
      </div>
    </form>
  )
};

export default AddProduct;
