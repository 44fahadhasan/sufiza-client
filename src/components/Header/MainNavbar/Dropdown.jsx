import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import WithoutDropdown from "./WithoutDropdown";

const Dropdown = ({
  item,
  idx,
  toggleDropdown,
  openDropdown,
  toggleSubDropdown,
  openSubDropdown,
}) => {
  return (
    <>
      {/* first dropdown button */}
      <button
        onClick={() => toggleDropdown(idx)}
        className="w-full p-2 flex items-center hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
      >
        {/* first dropdown label */}
        {item.label}

        {/* arrow icon */}
        <MdKeyboardArrowDown className="ms-auto" />
      </button>

      {/* first dropdown box */}
      <ul
        className={`bg-white border-y lg:border border-[#7e6e2a] ${
          openDropdown === idx ? "" : "hidden"
        } lg:absolute mt-[10px] z-50`}
      >
        {item.subItems.map((subItem, subidx) => (
          <li key={subidx} className="relative">
            {/* second dropdown button */}
            <button
              onClick={() => toggleSubDropdown(subidx)}
              className="w-full p-2 flex items-center hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
            >
              {/* second dropdown label */}
              {subItem.label}

              {/* arrow icon */}
              <MdKeyboardArrowDown className="ms-auto" />
            </button>

            {/* second dropdown box */}
            <ul
              className={`bg-white ${
                openSubDropdown === subidx ? "" : "hidden"
              } w-auto`}
            >
              {subItem.options.map((option, optionidx) => (
                <li key={optionidx} className="block px-4 py-2">
                  {/* second dropdown option */}
                  <WithoutDropdown data={option} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

Dropdown.propTypes = {};

export default Dropdown;
