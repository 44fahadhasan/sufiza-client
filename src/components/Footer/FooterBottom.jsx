import { Link } from "react-router-dom";
import { footerBottomNavbar } from "../../data/data";
import Paragraph from "../reusable/Paragraph";

const FooterBottom = () => {
  return (
    <div className="flex flex-col-reverse justify-between pt-5 border-t border-gray-300 sm:flex-row flex-wrap items-center">
      <Paragraph
        para={`Sufiza Property Limited 2011-${new Date().getFullYear()}`}
        style={"text-sm text-gray-800"}
      />

      <nav>
        <ul className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-5 sm:flex-row">
          {footerBottomNavbar?.map(({ label, link }, idx) => (
            <li key={idx}>
              <Link
                className="text-sm text-gray-800 transition-all duration-300 hover:text-[#7e6e2a]"
                to={link}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FooterBottom;
