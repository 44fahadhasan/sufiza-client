import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import SiteLogo from "../../shared/SiteLogo";

const NavStart = () => {
  return (
    <div className="flex items-center gap-x-5 md:col-span-3">
      {/* toggle menu button for small device */}
      <button
        type="button"
        className="hs-collapse-toggle md:hidden relative text-3xl text-[#7e6e2a]"
        id="hs-header-base-collapse"
        aria-expanded="false"
        aria-controls="hs-header-base"
        aria-label="Toggle navigation"
        data-hs-collapse="#hs-header-base"
      >
        {/* open icon */}
        <GiHamburgerMenu className="hs-collapse-open:hidden" />

        {/* close icon */}
        <IoClose className="hs-collapse-open:block hidden" />

        <span className="sr-only">Toggle navigation</span>
      </button>

      {/* website logo */}
      <SiteLogo />
    </div>
  );
};

export default NavStart;
