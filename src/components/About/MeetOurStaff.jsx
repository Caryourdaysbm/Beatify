import React from "react";
import amarachi from "../../assets/about/Amarachi.png";
import micheal from "../../assets/about/micheal.png";
import austin from "../../assets/about/austin.png";
import kingsley from "../../assets/about/kingsley.png";
import mike from "../../assets/about/mike.png";
import andrew from "../../assets/about/andrew.png";
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function MeetOurStaff() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mx-10 py-6">
      <div className="flex">
        <h3 className="mx-auto text-md font-semibold py-10" data-aos="fade-down"
          data-aos-duration="2000">Meet our Staff</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10" data-aos="fade-right"
          data-aos-duration="2000">
        <div>
          <img src={amarachi} alt="" />
          <div className="flex flex-col justify-center ">
            <h3 className="font-bold mx-auto">Amarachi Sylvia</h3>
            <p className="mx-auto">Content Writer</p>
          </div>
        </div>

        <div>
          <img src={micheal} alt="Micheal" />
          <div className="flex flex-col justify-center ">
            <h3 className="font-bold mx-auto">Micheal Taiwo</h3>
            <p className="mx-auto">Frontend Developer</p>
          </div>
        </div>
        <div>
          <img src={austin} alt="Austin" />
          <div className="flex flex-col justify-center ">
            <h3 className="font-bold mx-auto">Austin Jacobs</h3>
            <p className="mx-auto">Product Designer</p>
          </div>
        </div>
        <div>
          <img src={kingsley} alt="Kingsley" />
          <div className="flex flex-col justify-center ">
            <h3 className="font-bold mx-auto">Kingsley Obi</h3>
            <p className="mx-auto">Graphic Designer</p>
          </div>
        </div>
        <div>
          <img src={mike} alt="Mike" />
          <div className="flex flex-col justify-center ">
            <h3 className="font-bold mx-auto">Mike Essien</h3>
            <p className="mx-auto">Product Manager</p>
          </div>
        </div>
        <div>
          <img src={andrew} alt="Andrew" />
          <div className="flex flex-col justify-center ">
            <h3 className="font-bold mx-auto">Andrew Ali</h3>
            <p className="mx-auto">Mobile Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
