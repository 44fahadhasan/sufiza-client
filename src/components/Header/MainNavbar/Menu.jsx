import React from "react";
import Dropdown from "./Dropdown";
import WithoutDropdown from "./WithoutDropdown";

const Menu = ({
  data,
  toggleDropdown,
  openDropdown,
  toggleSubDropdown,
  openSubDropdown,
}) => {
  return (
    <>
      {data?.map((item, idx) => (
        <li key={idx} className="relative">
          {item.subItems ? (
            <Dropdown
              toggleDropdown={toggleDropdown}
              openDropdown={openDropdown}
              toggleSubDropdown={toggleSubDropdown}
              openSubDropdown={openSubDropdown}
              item={item}
              idx={idx}
            />
          ) : (
            <>
              {/* first without dropdown */}
              <WithoutDropdown data={item} />
            </>
          )}
        </li>
      ))}
    </>
  );
};

export default Menu;
