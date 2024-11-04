import NavCenter from "./NavCenter";
import NavEnd from "./NavEnd";
import NavStart from "./NavStart";

const NavbarMain = () => {
  return (
    <nav className="relative container w-[93%] mx-auto md:grid py-2 flex flex-wrap md:grid-cols-12 basis-full items-center">
      {/* navbar start */}
      <NavStart />

      {/* navbar end */}
      <NavEnd />

      {/* navbar center */}
      <NavCenter />
    </nav>
  );
};

export default NavbarMain;
