import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Cards() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="grid lg:grid-cols-3 grid-cols-1 px-2 lg:px-10 py-6"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div className="bg-grey mb-10 lg:mb-0 rounded-[3rem] w-[340px] max-w-[340px] max-h-[410px] mx-auto  lg:px-[3rem] py-8 shadow-close">
        <h3 className="flex justify-center text-center font-bold py-4 text-aboutText text-2xl">
          Content Creators
        </h3>
        <p className="flex justify-center text-center pb-4 font-semibold">
          Write/produce entertaining or educational materials that caters the
          interests and challenges of a target audience.
        </p>
        <button className="bg-deepPurple px-12 py-2 flex mx-auto text-lightGrey rounded-md">
          Get Started
        </button>
      </div>
      <div className="bg-grey mb-10 lg:mb-0 rounded-[3rem] w-[340px] max-w-[340px] max-h-[410px] mx-auto  lg:px-[3rem] py-8 shadow-close">
        <h3 className="flex justify-center text-center font-bold py-4 text-aboutText text-2xl">
          System/app/web/ Development
        </h3>
        <p className="flex justify-center text-center pb-4 font-semibold">
          Design websites and system applications to follow clients’
          specifications and business’ needs.
        </p>
        <button className="bg-deepPurple px-12 py-2 flex mx-auto text-lightGrey rounded-md">
          Get Started
        </button>
      </div>
      <div className="bg-grey mb-10 lg:mb-0 rounded-[3rem] w-[340px] max-w-[340px] max-h-[410px] mx-auto  lg:px-[3rem] py-8 shadow-close">
        <h3 className="flex justify-center text-center font-bold py-4 text-aboutText text-2xl">
          Graphics Designers
        </h3>
        <p className="flex justify-center text-center pb-4 font-semibold">
          Combine art and technology to communicate ideas by using variety of
          design elements to achieve artistic or decorative effects.
        </p>
        <button className="bg-deepPurple px-12 py-2 flex mx-auto text-lightGrey rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
}
