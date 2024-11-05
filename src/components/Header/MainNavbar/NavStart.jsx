import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import SiteLogo from "../../shared/SiteLogo";

const NavStart = ({ toggleMenu, menuOpen }) => (
  <div className="flex items-center">
    {/* toggle menu button for small device */}
    <button
      onClick={toggleMenu}
      className="lg:hidden mr-4 focus:outline-none text-3xl text-[#7e6e2a]"
    >
      {menuOpen ? (
        <>
          {/* close icon */}
          <IoClose />
        </>
      ) : (
        <>
          {/* open icon */}
          <GiHamburgerMenu />
        </>
      )}

      <span className="sr-only">Toggle navigation</span>
    </button>

    {/* website logo */}
    <SiteLogo />
  </div>
);

export default NavStart;
