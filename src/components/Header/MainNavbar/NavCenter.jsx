import Menu from "./Menu";

const NavCenter = ({
  data,
  menuOpen,
  toggleDropdown,
  openDropdown,
  toggleSubDropdown,
  openSubDropdown,
}) => (
  <ul
    className={`overflow-y-scroll lg:overflow-visible max-h-[60vh] lg:h-auto flex-grow w-full px-4 border lg:border-none flex-col lg:justify-center lg:flex-row lg:flex lg:space-x-3 space-y-2 lg:space-y-0 absolute lg:static bg-white left-0 top-full lg:top-auto lg:left-auto transition-transform duration-300 ${
      menuOpen ? "flex" : "hidden"
    } lg:flex`}
  >
    {/* menu for large and small device */}
    <Menu
      data={data}
      toggleDropdown={toggleDropdown}
      openDropdown={openDropdown}
      toggleSubDropdown={toggleSubDropdown}
      openSubDropdown={openSubDropdown}
    />
  </ul>
);

export default NavCenter;
