import PropTypes from "prop-types";
import React from "react";

const FeedbackCard = ({ src }) => {
  return (
    <div className="flex justify-center p-4">
      <div className="rounded-lg shadow-lg bg-white max-w-sm overflow-hidden border border-gray-200">
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
          <video
            controls
            className="w-full h-full rounded-t-lg"
            aria-label="Feedback video"
            preload="metadata"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "block";
            }}
          >
            <source src={src} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          {/* placeholder image */}
          <img
            src=""
            alt="Video Unavailable"
            className="w-full h-full rounded-t-lg hidden"
          />
        </div>
      </div>
    </div>
  );
};

FeedbackCard.propTypes = {
  src: PropTypes.string,
};

export default FeedbackCard;