import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { footerMainNavbar, footerSocialIcons } from "../../data/data";
import Heading from "../reusable/Heading";
import Paragraph from "../reusable/Paragraph";
import SiteLogo from "../shared/SiteLogo";

const FooterTop = () => {
  return (
    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 items-center">
      {/* first column */}
      <div className="sm:col-span-2 self-start">
        {/* website logo */}
        <SiteLogo />

        <div className="mt-6 lg:max-w-sm space-y-4">
          {/* location infos */}
          <div>
            <div className="flex gap-3">
              {/* icon */}
              <FaLocationDot className="text-[#7e6e2a] text-xl mt-1 hidden sm:block" />

              {/* info */}
              <div className="space-y-4">
                <div>
                  {/* title */}
                  <Heading
                    title={"Bangladesh Office"}
                    style={"text-base font-medium"}
                  />

                  <Paragraph
                    para={"Catharsis Tower, (6th Floor) House #133,"}
                  />

                  <Paragraph
                    para={"Road #12, Block - E, Banani, Dhaka, 1213"}
                  />
                </div>

                <div>
                  {/* title */}
                  <Heading
                    title={"US Office"}
                    style={"text-base font-medium"}
                  />

                  <Paragraph
                    para={"2451 W Grapevine Mills Circle, Ste. 1024,"}
                  />

                  <Paragraph para={"Dallas TX 76051"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second column */}
      {/* nav */}
      <nav className="min-h-[120px]">
        <ul className="space-y-2">
          {footerMainNavbar?.map(({ label, link }, idx) => (
            <li key={idx}>
              <Link
                to={link}
                className="hover:text-[#7e6e2a] transition-all duration-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* third column */}
      <div className="space-y-2 min-h-[120px]">
        <div className="flex items-center gap-3">
          {/* icon */}
          <BiSolidPhoneCall className="text-[#7e6e2a] text-2xl" />

          {/* number */}
          <Link to={"tel:+8809613646465"} className="text-gray-950">
            +8809613646465
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {/* icon */}
          <IoMdMail className="text-[#7e6e2a] text-2xl" />

          {/* mail */}
          <Link to={"support@sufiza.com.bd"} className="text-gray-950">
            support@sufiza.com.bd
          </Link>
        </div>

        {/* social icons */}
        <ul className="flex gap-x-4 pt-4">
          {footerSocialIcons?.map(({ icon: Icon, link, color }, idx) => (
            <li key={idx}>
              <Link
                to={link}
                style={{
                  color,
                }}
              >
                <Icon className={"text-2xl sm:text-4xl"} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterTop;
