import PropTypes from "prop-types";
import React from "react";

const ImgSlide = ({ data }) => {
  const { img_url } = data || {};

  return (
    <div
      className={`relative h-screen w-full bg-cover bg-center`}
      style={{ backgroundImage: `url(${img_url})` }}
    >
      {/* overlay div */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
  );
};

ImgSlide.propTypes = {
  data: PropTypes.object,
};

export default ImgSlide;
