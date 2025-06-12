import HeroSection from "@/components/home/HeroSection";
import ScrollSection from "@/components/home/ScrollSection";
import React from "react";
import ScrollY from "../ScrollY";

import HorizontalImageScroll from "@/components/home/HorizontalImageScroll";
import VerticalScroll from "./VerticalScroll";
import Word1 from "./Word1";
import Word2 from "./Word2";
import Word3 from "./Word3";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className=" section-padding-x mt-10   ">
      {/* <HeroSection/> */}
      <HorizontalImageScroll />
      <VerticalScroll />
      <Word1 />
      <Word2 />
      <div className=" h-[100vh]">
        <Word3 />
      </div>
      <Testimonial />
      {/* <ScrollY /> */}
    </div>
  );
};

export default Home;
