import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import event1 from "/src/assets/event 1.svg";
import event2 from "/src/assets/event 2.svg";
import event3 from "/src/assets/event 3.svg";
import event4 from "/src/assets/event 4.svg";
import event5 from "/src/assets/event 5.svg";

import { Autoplay, Pagination } from "swiper";

export default function HomeEventsCarousel() {
  return (
    <div className="py-9">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* slide 1 */}
        <SwiperSlide>
          <div className="event-container">
            <div>
              <img src={event1} className="lg:w-[75%]" />
            </div>

            <div className="event-carousel-text ">
              <h3 className="font-semibold">TECH-A-THON</h3>
              <p>
                January 2023, we will be having a competition across all units
                (Tech-a-thon).
              </p>
              {/* <p>
                This is going to run from the second week of January till the
                end of January. Then on the 25th of February, we will have our
                Tech-a-thon festival at Victorial Island.{" "}
              </p> */}
              <a href="#" class="event-readmore">
                Learn more
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 2 */}
        <SwiperSlide>
          <div className="event-container">
            <div>
              <img src={event2} className="lg:w-[75%]" />
            </div>
            <div className="event-carousel-text ">
              <h3 className="font-semibold">BOOT CAMP</h3>
              <p>
                March 2023, we will be heading off to a boot camp session with
                Microsoft senior devs!!!
              </p>
              {/* <p>
                This is going to be a great opportunity to learn, share your
                Tech experience, meet & greet, and much more.
              </p> */}
              <a href="#" class="event-readmore">
                Learn more
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 3 */}
        <SwiperSlide>
          <div className="event-container">
            <div>
              <img src={event3} className="lg:w-[75%]" />
            </div>
            <div className="event-carousel-text ">
              <h3 className="font-semibold">VACATION</h3>
              <p>April is going to be a vacation season for us at Beatify!!!</p>
              {/* <p>
                All work and no play makes whatever a dull dude, so we are
                moving out!!! It promises to be fun and exciting.
              </p> */}
              <a href="#" class="event-readmore">
                Learn more
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 4 */}
        <SwiperSlide>
          <div className="event-container">
            <div>
              <img src={event4} className="lg:w-[75%]" />
            </div>
            <div className="event-carousel-text ">
              <h3 className="font-semibold">SEMINAR</h3>
              <p>
                The month of May is going to be a busy one for us at Beatify.{" "}
              </p>
              {/* <p>
                We are going to have a seminar training on AI from the first
                week of April.{" "}
              </p> */}
              <a href="#" class="event-readmore">
                Learn more
              </a>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 5 */}
        <SwiperSlide>
          <div className="event-container">
            <div>
              <img src={event5} className="lg:w-[75%]" />
            </div>
            <div className="event-carousel-text ">
              <h3 className="font-semibold">AWARD PARTY</h3>
              <p>
                While we wrap up the month of May, we have got a party and
                awards night coming up!!!
              </p>
              <a href="#" class="event-readmore">
                Learn more
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
