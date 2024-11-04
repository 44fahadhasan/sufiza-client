import React from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { SwiperSlide } from "swiper/react";
import { customerFeedbacks } from "../../../data/data";
import Carousel from "../../Carousel/Carousel";
import Containter from "../../reusable/Containter";
import Heading from "../../reusable/Heading";
import FeedbackCard from "./FeedbackCard";

const CustomerFeedback = () => {
  return (
    <section className="bg-gray-50">
      <Containter style={"py-14 lg:py-24"}>
        {/* title */}
        <Heading
          title={"Sufiza in the Customer’s Words"}
          style={"text-center font-bold text-2xl md:text-4xl"}
        />

        {/* feedback slider */}
        <div className="relative mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20">
          {/* slider */}
          <Carousel
            data={{
              isResponsive: true,
              IsFreeMode: true,
              slidesPerViewNum: 3,
              gap: 20,
              loopContinue: true,
            }}
          >
            {customerFeedbacks?.map(({ src }, idx) => (
              <SwiperSlide key={idx}>
                <FeedbackCard src={src} key={idx} />
              </SwiperSlide>
            ))}
          </Carousel>

          {/* left button */}
          <button
            type="button"
            className="z-10 absolute translate-y-[-50%] top-[50%] left-0 swiper-button-prev"
          >
            <IoIosArrowDropleftCircle className="text-[#7e6e2a] text-4xl" />
          </button>

          {/* right button */}
          <button
            type="button"
            className="z-10 absolute translate-y-[-50%] top-[50%] right-0 swiper-button-next"
          >
            <IoIosArrowDroprightCircle className="text-[#7e6e2a] text-4xl" />
          </button>
        </div>
      </Containter>
    </section>
  );
};

export default CustomerFeedback;
