import NavbarMain from "../../../components/Header/MainNavbar/NavbarMain";

const Header = () => {
  return (
    <header className="z-50 bg-white border-b border-gray-200 fixed top-0 w-full text-gray-900">
      {/* main navbar */}
      <NavbarMain />
    </header>
  );
};

export default Header;
