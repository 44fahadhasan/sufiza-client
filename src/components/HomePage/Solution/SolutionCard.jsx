import PropTypes from "prop-types";
import Button from "../../reusable/Button";
import Heading from "../../reusable/Heading";
import Paragraph from "../../reusable/Paragraph";

const SolutionCard = ({ data }) => {
  const { icon, alt, title, content, button_label } = data || {};

  return (
    <div className="grid xl:grid-rows-3 grid-cols-1 bg-white rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-700 p-3">
      {/* icon img */}
      <div className="mx-auto size-32">
        <img src={icon} alt={alt} className="object-cover" />
      </div>

      <div className="text-center">
        {/* title */}
        <Heading
          title={title}
          style={"text-3xl font-bold text-gray-800 my-4"}
        />

        {/* content */}
        <Paragraph para={content} style={"text-center"} />
      </div>

      {/* button */}
      <button type="button" className="xl:self-end mt-7 xl:mt-0">
        <Button label={button_label} />
      </button>
    </div>
  );
};

SolutionCard.propTypes = {
  data: PropTypes.object,
};

export default SolutionCard;
