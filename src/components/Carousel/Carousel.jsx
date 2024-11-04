import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectFade,
  FreeMode,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper } from "swiper/react";

const Carousel = ({ data, children }) => {
  const { isResponsive, IsFreeMode, slidesPerViewNum, gap, fade, play } =
    data || {};

  // responsive data for slider
  const responsive = {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  return (
    <div>
      {/* slider */}
      <Swiper
        keyboard={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={slidesPerViewNum}
        spaceBetween={gap}
        freeMode={IsFreeMode}
        effect={fade && "fade"}
        autoplay={play}
        breakpoints={isResponsive && responsive}
        modules={[
          EffectFade,
          Navigation,
          Pagination,
          Autoplay,
          FreeMode,
          Keyboard,
        ]}
      >
        {/* single slide render here */}
        {children}
      </Swiper>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
};

export default Carousel;
