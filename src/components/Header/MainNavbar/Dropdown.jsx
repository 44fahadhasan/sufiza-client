import PropTypes from "prop-types";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import WithoutDropdown from "./WithoutDropdown";

const Dropdown = ({ data }) => {
  const { label, dropdown } = data || {};

  return (
    <>
      {/* first dropdown */}
      <div className="hs-dropdown [--strategy:static] lg:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] lg:[--is-collapse:false]">
        {/* first dropdown button */}
        <button
          id={`dropdown-button-${label}`}
          type="button"
          className="hs-dropdown-toggle w-full p-2 flex items-center hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
          aria-haspopup="menu"
          aria-expanded="false"
          aria-label="Dropdown"
        >
          {/* first dropdown label */}
          {label}
          {/* arrow down icon */}
          <MdKeyboardArrowDown className="hs-dropdown-open:-rotate-180 lg:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto lg:ms-1" />
        </button>

        {/* first dropdown card */}
        <div
          className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] lg:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full lg:w-52 hidden z-10 top-full ps-7 lg:ps-0 lg:bg-white lg:rounded-lg lg:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 lg:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="hs-header-base-dropdown"
        >
          <div className="py-1 lg:px-1 space-y-0.5">
            {dropdown?.map((dropdownItem, subIndex) =>
              dropdownItem?.dropdown ? (
                <React.Fragment key={`second-dropdown${subIndex}`}>
                  {/* second dropdown */}
                  <div className="hs-dropdown [--strategy:static] lg:[--strategy:absolute] [--adaptive:none] lg:[--trigger:hover] [--is-collapse:true] lg:[--is-collapse:false] relative">
                    {/* second dropdown button */}
                    <button
                      id={`hs-header-base-dropdown-sub${subIndex}`}
                      type="button"
                      className="hs-dropdown-toggle w-full flex justify-between items-center rounded-lg p-2 lg:px-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    >
                      {/* second dropdown label */}
                      {dropdownItem?.label}
                      {/* arrow down icon */}
                      <MdKeyboardArrowDown className="hs-dropdown-open:-rotate-180 lg:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto lg:ms-1" />
                    </button>

                    {/* second dropdown card */}
                    <div
                      className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] lg:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative lg:w-48 hidden z-10 lg:mt-2 lg:!mx-[10px] lg:top-0 lg:end-full ps-7 lg:ps-0 lg:bg-white lg:rounded-lg lg:shadow-md before:hidden lg:before:block before:absolute before:-end-5 before:top-0 before:h-full before:w-5 lg:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-header-base-dropdown-sub"
                    >
                      {/* third without dropdown */}
                      <div className="p-1 space-y-1">
                        {dropdownItem?.dropdown?.map(
                          (subMenuItem, subMenuIdx) => (
                            // third without dropdown
                            <WithoutDropdown
                              data={subMenuItem}
                              key={`third-without-dropdown${subMenuIdx}`}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment key={`second-without-dropdown${subIndex}`}>
                  {/* second without dropdown */}
                  <WithoutDropdown data={dropdownItem} />
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Dropdown.propTypes = {
  setToggleMenu: PropTypes.object,
};

export default Dropdown;
