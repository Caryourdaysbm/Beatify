import React from "react";

export default function SecondCards() {
  return (
    <div>
      <div
        className="grid lg:grid-cols-2 grid-cols-1 px-2 lg:px-10 py-6"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <div className="bg-grey mb-10 lg:mb-0 rounded-[3rem] w-[340px] max-w-[340px] max-h-[410px] mx-auto  lg:px-[3rem] py-8 shadow-close mt-4">
          <h3 className="flex justify-center text-center font-bold py-4 text-aboutText text-2xl">
            Product Designers
          </h3>
          <p className="flex justify-center text-center pb-4 font-semibold">
            Concepting, designing, and implementing a product by working with
            developers, designers and other team members. Creating style guides,
            recognizing patterns and building documentation with team members
          </p>
          <button className="bg-deepPurple px-12 py-2 flex mx-auto text-lightGrey rounded-md">
            Get Started
          </button>
        </div>
        <div className="bg-grey mb-10 lg:mb-0 rounded-[3rem] w-[340px] max-w-[340px] max-h-[410px] mx-auto  lg:px-[3rem] py-8 shadow-close">
          <h3 className="flex justify-center text-center font-bold py-4 text-aboutText text-2xl">
            Video Editor/Motion Graphics
          </h3>
          <p className="flex justify-center text-center pb-4 font-semibold">
            Responsible for reviewing audio and visual footage and using
            computer software to organize clips into cohesive unit.
          </p>
          <button className="bg-deepPurple px-12 py-2 flex mx-auto text-lightGrey rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
