import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import { countries, properties } from "../../../data/data";
import Button from "../../reusable/Button";
import CustomSelector from "../../reusable/CustomSelector";
import Paragraph from "../../reusable/Paragraph";

const EstateFilters = () => {
  const [isActive, setActive] = useState(false);
  const [isActiveOne, setActiveOne] = useState(false);
  const [range, setRange] = useState([0, 1000]);

  return (
    <div className="mt-9 md:mt-16 mb-6 md:mb-12">
      <div className="flex flex-wrap gap-6 sm:grid sm:grid-cols-2 md:flex md:justify-between lg:justify-around">
        {/* filter by rent & sell button */}
        <div className="space-y-2">
          <Paragraph para={"Rent/ Sell?"} />

          <div className="space-x-3">
            {/* rent button */}
            <button
              onClick={() => {
                setActive((pre) => !pre);
                setActiveOne(false);
              }}
              className={`${isActive && "bg-[#7e6e2a]"} inline-flex`}
            >
              <Button label={"rent"} style={isActive && "text-white"} />
            </button>

            {/* sell button */}
            <button
              onClick={() => {
                setActiveOne((pre) => !pre);
                setActive(false);
              }}
              className={`${isActiveOne && "bg-[#7e6e2a]"} inline-flex`}
            >
              <Button label={"sell"} style={isActiveOne && "text-white"} />
            </button>
          </div>
        </div>

        {/* filter by properties */}
        <div className="space-y-2 w-36">
          <Paragraph para={"Filter by Properties"} />

          <CustomSelector options={properties} />
        </div>

        {/* filter by countries */}
        <div className="space-y-2 w-36">
          <Paragraph para={"Filter by Countries"} />

          <CustomSelector options={countries} />
        </div>

        {/* filter by range */}
        <div className="space-y-1">
          <Paragraph para={"Property Range (sq.ft)"} />

          {/* range display */}
          <div className="flex justify-between">
            {/* min */}
            <Paragraph para={`Min: ${range[0]}`} />

            {/* max */}
            <Paragraph para={`Max: ${range[1]}`} />
          </div>

          {/* range slider */}
          <Slider
            range
            min={0}
            max={100}
            value={range}
            onChange={(newRange) => setRange(newRange)}
            allowCross={false}
            trackStyle={[{ backgroundColor: "#7e6e2a" }]}
            handleStyle={[
              { borderColor: "#7e6e2a", backgroundColor: "#F9FAFB" },
              { borderColor: "#7e6e2a", backgroundColor: "#F9FAFB" },
            ]}
            railStyle={{ backgroundColor: "#CCCCCC" }}
          />
        </div>
      </div>

      {/* division */}
      <div className="mt-5 space-y-3 text-center">
        {/* <div className="">
          <Paragraph
            para={"Division"}
            style={"!text-[#7e6e2a] font-medium uppercase"}
          />

          <div className="flex gap-3 justify-center items-center">
            {location?.map(({ country }, idx) => (
              <CheckBox label={country} key={idx} />
            ))}
          </div>
        </div> */}

        {/* district */}
        {/* <div className="">
          <Paragraph
            para={"District"}
            style={"!text-[#7e6e2a] font-medium uppercase"}
          />

          <div className="flex gap-3 justify-center items-center">
            {location?.map(({ country }, idx) => (
              <CheckBox label={country} key={idx} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default EstateFilters;
