import React from "react";
import { TypeAnimation } from "react-type-animation";
import advertise from "../../../resources/images/Advertise.png";

const Showcase = () => {
  return (
    <div className="flex md:flex-row flex-col  gap-3">
      <div>
        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={[
            "Transform your business",
            1000,
            "Reduce cost of sales",
            1000,
            "Increase customer satisfaction",
            1000,
            "Increase operational efficiency",
            1000,
          ]}
          speed={40} // Custom Speed from 1-99 - Default Speed: 40
          className="md:text-[46px] text-[32px] text-[#222222]"
        //   style={{ fontSize: "46px", color: "#222222" }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />
        <div className="flex flex-col gap-7">
          <p className="md:text-[48px] text-[34px] font-[700] text-[#2a74ed]">
            with Technology😎
          </p>
          <p className="md:text-[23px] text-[18px]">
            From apps to data warehousing to customer portals, we help
            organisations solve challenges,{" "}
            <span className="font-[600]">with technology</span>
          </p>
      <img className="w-full md:hidden inline" src={advertise} alt="showcase_image" />
          <button className="bg-[#2a74ed] rounded-md py-[1.2rem]  text-white md:w-[10rem] w-full">
            Get in Touch
          </button>
        </div>
      </div>
      <img className="w-[45%] md:inline hidden" src={advertise} alt="showcase_image" />
    </div>
  );
};

export default Showcase;
