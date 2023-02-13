import React from "react";
// import uniqueBg from '../../assets/about/uniqueBg.png';'
import unique from "../../assets/about/unique.png";
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Unique() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="bg-aboutBg mx-auto w-full px-10 py-8 ">
        <div className="outline outline-2 outline-aboutText max-w-6xl mx-auto bg-grayBg rounded-3xl flex flex-col md:flex-row justify-center">
          <div className="md:px-10 md:w-1/4" data-aos="fade-right"
          data-aos-duration="2000">
            <h3 className="text-aboutText font-bold text-2xl md:mt-[22rem] ">
              Our job is not to create content...
            </h3>
          </div>
          <div data-aos="fade-up"
          data-aos-duration="2000">
            <img src={unique} alt="" />
          </div>
          <div className="md:px-10 md:w-1/4" data-aos="fade-left"
          data-aos-duration="2000">
            <h3 className="text-aboutText font-bold text-2xl md:mt-[22rem]">
              ...our job is to change the world of people who consume it.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
