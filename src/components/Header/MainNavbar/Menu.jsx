import React from "react";
import { mainNavbar } from "../../../data/data";
import Dropdown from "./Dropdown";
import WithoutDropdown from "./WithoutDropdown";

const Menu = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-end lg:items-center gap-0.5 lg:gap-1">
      {mainNavbar?.map((item, idx) => (
        <React.Fragment key={idx}>
          {item?.dropdown ? (
            <>
              {/* first dropdown */}
              <Dropdown data={item} />
            </>
          ) : (
            <>
              {/* first without dropdown */}
              <WithoutDropdown data={item} />
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Menu;
