import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function CareerPath() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div
        className="mx-auto py-5 px-2 lg:py-10 lg:px-[26rem]"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h3 className="text-center font-bold text-2xl lg:px-[6rem]">
          Choose Your <span className="text-lighterPurple">Career</span> Path
          With Us
        </h3>
        <p className="text-center font-semibold">
          We are looking for dynamic and creative individuals who are willing to
          learn and advance their knowledge in the following fields.
        </p>
      </div>
    </div>
  );
}
