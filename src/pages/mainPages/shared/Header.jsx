import NavbarMain from "../../../components/Header/MainNavbar/NavbarMain";

const Header = () => {
  return (
    <header className="z-50 bg-gray-50 border-b-[3px] border-[#7e6e2a] fixed top-0 w-full text-gray-900">
      {/* main navbar */}
      <NavbarMain />
    </header>
  );
};

export default Header;
