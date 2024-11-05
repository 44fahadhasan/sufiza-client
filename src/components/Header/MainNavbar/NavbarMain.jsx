import { useState } from "react";
import { mainNavbar } from "../../../data/data";
import NavCenter from "./NavCenter";
import NavEnd from "./NavEnd";
import NavStart from "./NavStart";

const NavbarMain = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setOpenSubDropdown(null); // close sub-dropdowns on main dropdown toggle
  };

  const toggleSubDropdown = (index) => {
    setOpenSubDropdown(openSubDropdown === index ? null : index);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative container w-[93%] mx-auto flex items-center justify-between py-2">
      {/* navbar start */}
      <NavStart toggleMenu={toggleMenu} menuOpen={menuOpen} />

      {/* navbar center */}
      <NavCenter
        data={mainNavbar}
        menuOpen={menuOpen}
        toggleDropdown={toggleDropdown}
        openDropdown={openDropdown}
        toggleSubDropdown={toggleSubDropdown}
        openSubDropdown={openSubDropdown}
      />

      {/* navbar end */}
      <NavEnd />
    </nav>
  );
};

export default NavbarMain;
