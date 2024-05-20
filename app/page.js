import Slider from "@/components/slider/slider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FeaturedCategory from "./home/featuredCategory";

export default function Home() {
  return (
    <>
      <Slider />
      <FeaturedCategory />
    </>
  );
}
