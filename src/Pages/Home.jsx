import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import enjoy from "../assets/enjoy.png";
import intern from "../assets/Image intern.png";
import hiring from "../assets/hiring.png";
import handshake from "../assets/handshake.png";
import HomeEventsCarousel from "../components/Home/HomeEventsCarousel";
import PeopleCarousel from "../components/People/PeopleCarousel";
import PeopleCarouselMobile from "../components/People/PeopleCarouselMobile";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#F5F6F6]">
      <div className="pt-14 space-y-20 text-[#000405]">
        {/* first flex */}
        <div
          className="flex flex-col max-w-6xl mx-auto px-10 space-y-14 md:flex-row  md:items-center md:justify-between md:space-x-20 md:space-y-0 lg:space-x-6"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {/* text */}
          <div className=" flex flex-col flex-wrap space-y-8 lg:max-w-md">
            <h2 className="md:text-3xl lg:text-5xl font-semibold">
              The oppurtunity to
              <span className="text-[#563198]"> Hone your Tech Skills</span> is
              Here!
            </h2>
            <p className="font-medium md:max-w-md">
              We train interns, connect them to Tech companies that will employ
              them or give them an opportunity to render their Tech services to
              companies and brands that are willing to pay for such services.
            </p>
          </div>
          {/* img */}
          <div className="lg:flex justify-end">
            <img src={enjoy} className="lg:w-[60%]" />
          </div>
        </div>
        {/* Service */}
        <section className="max-w-6xl mx-auto px-10">
          <div
            className="space-y-9"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h2 className="text-center text-2xl font-semibold">Our Services</h2>
            <div className="flex flex-col space-y-9 md:items-center md:justify-between md:flex-row md:space-y-0 md:space-x-20 lg:space-x-6">
              {/* Image */}
              <div>
                <img src={intern} className="lg:w-[75%]" />
              </div>
              <div className="lg:w-[50%] justify-start">
                <ul className="lg:w-[70%] md:max-w-md font-semibold text-lg pb-4 cursor-pointer list-disc ">
                  <li>
                    We give our interns real-world tasks to complete so they can
                    hone their skills.
                  </li>
                  <li>
                    We also provide training so they can acquire the knowledge
                    necessary to succeed in the real world.
                  </li>
                  <li>For exemplary work performed, bonuses are given.</li>
                </ul>
                <a className="text-[#341E5C] font-semibold">Learn More</a>
              </div>
            </div>
          </div>
        </section>
        {/* Hiring */}
        <section className="max-w-6xl mx-auto px-10">
          <div
            className="flex flex-col-reverse md:flex-row  md:items-center md:justify-between md:space-x-20 md:space-y-0 lg:space-x-6"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            {/* text */}
            <div className=" flex flex-col flex-wrap space-y-4 pt-12 md:pt-0 lg:max-w-md">
              <p className="font-semibold md:max-w-md">
                We serve as employment contractors for our interns. This we do
                by connecting them to businesses and organizations that will
                hire them
              </p>
              <a className="text-[#341E5C] font-semibold">Learn More</a>
            </div>
            {/* img */}
            <div>
              <img src={hiring} className="lg:w-[60%]" />
            </div>
          </div>
        </section>

        {/*  */}
        <section className="bg-[#CCBEE7]">
          <div
            className="space-y-9 max-w-6xl mx-auto px-10 py-10"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="flex flex-col space-y-9 md:items-center md:justify-between md:flex-row md:space-y-0 md:space-x-20 lg:space-x-6">
              {/* Image */}
              <div>
                <img src={handshake} className="lg:w-[75%]" />
              </div>
              <div className="lg:w-[50%] justify-start">
                <p className="lg:w-[70%] md:max-w-md font-semibold text-lg pb-4 cursor-pointer list-disc ">
                  We are like training institutions where we create a pathway
                  for earning while learning. We think that learning may be
                  enjoyable while also earning money back. Therefore, we came up
                  with the idea of paying a commission of 40% for any successful
                  project.
                </p>
                <a className="text-[#341E5C] font-semibold">Learn More</a>
              </div>
            </div>
          </div>
        </section>
        {/* upcoming events*/}
        <section>
          <div data-aos="fade-up" data-aos-duration="2000">
            <h2 className="text-center text-2xl font-semibold">
              Upcoming Events
            </h2>
            <div>
              <HomeEventsCarousel />
            </div>
          </div>
        </section>

        {/* What people are saying about us */}
        <section>
          <div className="max-w-6xl mx-auto px-10">
            <h2 className="text-center text-2xl font-semibold">
              What people are saying about us
            </h2>
            <div className="hidden md:block">
              <PeopleCarousel />
            </div>
            <div className="md:hidden">
              <PeopleCarouselMobile />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Home;
