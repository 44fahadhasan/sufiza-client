import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SwiperSlide } from "swiper/react";
import { heroSliderImages } from "../../../data/data";
import Carousel from "../../Carousel/Carousel";
import Button from "../../reusable/Button";
import Heading from "../../reusable/Heading";
import ImgSlide from "./ImgSlide";

const Hero = () => {
  return (
    <section>
      {/* slider */}
      <Carousel
        data={{
          isResponsive: false,
          IsFreeMode: false,
          slidesPerViewNum: 1,
          fade: true,
          gap: 0,
          play: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          },
        }}
      >
        {heroSliderImages?.map((img, idx) => (
          <SwiperSlide key={idx}>
            <ImgSlide data={img} />
          </SwiperSlide>
        ))}
      </Carousel>

      <div className="z-10 absolute inset-0 flex justify-center items-center">
        <div
          className="uppercase font-medium space-y-5 ml-5 sm:ml-0
        "
        >
          <p className="tracking-[5px] text-gray-950 font-medium">
            welcome to Sufiza
          </p>

          <Heading
            title={"Real Estate"}
            style={
              "text-5xl lg:text-7xl text-white tracking-[3px] md:leading-[60px] uppercase break-words opacity-100"
            }
          />

          {/* style text */}
          <h3
            className="text-5xl lg:text-7xl tracking-[3px] md:leading-[60px] uppercase break-words"
            style={{ WebkitTextStroke: "2px white", color: "transparent" }}
          >
            Agency
          </h3>

          <div className="space-x-4">
            <button type="button" className="swiper-button-prev">
              <Button
                label={<FaArrowLeft />}
                style={"text-white hover:text-white"}
              />
            </button>

            <button type="button" className="swiper-button-next">
              <Button
                label={<FaArrowRight />}
                style={"text-white hover:text-white"}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
