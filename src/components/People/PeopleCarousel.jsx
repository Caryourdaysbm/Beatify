import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import Anthony from "/src/assets/Anthony.png";
import Ken from "/src/assets/Ken.png";
import Marcus from "/src/assets/Marcus.png";
import Seyi from "/src/assets/Seyi.png";

export default function PeopleCarousel() {
  return (
    <>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper py-9 pl-14"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center w-[70%] mx-auto space-y-2">
            <div>
              <img src={Anthony} />
            </div>
            <div className="text-center">
              <h3 className="font-bold">Anthony Obiora</h3>
              <p>Frontend Developer</p>
              <p className="text-sm pt-1">
                Beatify Internship program was my easiest route into tech. In
                less than one year, I got a job to work in a fintech company.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex flex-col items-center w-[70%] mx-auto space-y-2">
            <div>
              <img src={Seyi} />
            </div>
            <div className="text-center max-w-md">
              <h3 className="font-bold">Seyi Balogun</h3>
              <p>Product Designer</p>
              <p className="text-sm pt-1">
                As an intern at Beatify, I get paid. That’s not even the best
                part, I get a commission for each project I work on. That’s cool
                right?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex flex-col items-center w-[70%] mx-auto space-y-2">
            <div>
              <img src={Marcus} />
            </div>
            <div className="text-center max-w-md">
              <h3 className="font-bold">Anita Marcus</h3>
              <p>Human Resource Manager</p>
              <p className="text-sm pt-1">
                We’ve hired a few interns from Beatify into our company. I will
                tell you this, those guys are good.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center w-[70%] mx-auto space-y-2">
            <div>
              <img src={Ken} />
            </div>
            <div className="text-center">
              <h3 className="font-bold">Ken Ayuba</h3>
              <p>CEO BIDA Networks</p>
              <p className="text-sm pt-1">
                We’ve hired a few interns from Beatify into our company. I will
                tell you this, those guys are good.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
