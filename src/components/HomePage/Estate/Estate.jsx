import Containter from "../../reusable/Containter";
import Heading from "../../reusable/Heading";
import Paragraph from "../../reusable/Paragraph";
import EstateFilters from "./EstateFilters";
import EstatesGallery from "./EstatesGallery";

const Estate = () => {
  return (
    <Containter>
      {/* section contents */}
      <div className="uppercase text-center space-y-3">
        <Paragraph
          para={"view our"}
          style={"tracking-[6px] text-sm md:text-base "}
        />

        <Heading
          title={"estates"}
          style={
            "!text-[#7e6e2a] text-3xl md:text-5xl font-light tracking-[10px]"
          }
        />
      </div>

      {/* all filter */}
      <EstateFilters />

      {/* estates */}
      <EstatesGallery />
    </Containter>
  );
};

export default Estate;
