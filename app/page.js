import Slider from "@/components/slider/slider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FeaturedCategory from "./home/featuredCategory";
import CategorySlider from "./home/CategorySlider";
import Banner from "./home/Banner";
import Product from "./home/Product";
import TopProduct from "./home/TopProduct";
import SubscribeSection from "./home/SubscribeSection";

export default function Home() {
  return (
    <>
      <Slider />
      <FeaturedCategory />
      <Banner />
      <Product />
      <TopProduct />
      <SubscribeSection />
    </>
  );
}
