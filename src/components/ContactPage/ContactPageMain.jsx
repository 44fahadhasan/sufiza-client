import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "../reusable/Button";
import Containter from "../reusable/Containter";
import Heading from "../reusable/Heading";
import Paragraph from "../reusable/Paragraph";
import GoogleMap from "./GoogleMap";

const ContactPageMain = () => {
  return (
    <Containter>
      {/* title */}
      <Heading
        title={"Contact"}
        style={"text-center font-semibold text-2xl md:text-4xl mb-6"}
      />

      <div className="pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {/* left col */}
        <div>
          <h2 className="text-lg font-bold xdark:text-gray-100"></h2>
          <Heading title={"Contact Info"} style={"font-semibold text-lg"} />

          <Paragraph
            para={
              "Have something to say? We are here to help. Fill up the form or send email or call phone."
            }
            style={"max-w-sm py-4"}
          />

          <div className="xflex items-center mt-8 space-y-3 max-w-sm">
            {/* location */}
            <div className="flex gap-3">
              {/* icon */}
              <FaLocationDot className="text-[#7e6e2a] text-2xl" />

              <Paragraph
                para={
                  "158, Flat No: 3/B (2nd Floor), Lake Circus, Kalabagan, Dhanmondi, Dhaka-1205"
                }
              />
            </div>

            {/* phone */}
            <div className="flex items-center gap-3">
              {/* icon */}
              <BiSolidPhoneCall className="text-[#7e6e2a] text-2xl" />

              {/* number */}
              <Link to={"tel:+8801898-803231"} className="text-gray-950">
                +8801898-803231
              </Link>
            </div>

            {/* mail */}
            <div className="flex items-center gap-3">
              {/* icon */}
              <IoMdMail className="text-[#7e6e2a] text-2xl" />

              {/* mail */}
              <Link to={"support@sufiza.com.bd"} className="text-gray-950">
                sufizafamily@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/*  */}
        <div>
          <form className="text-gray-950">
            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border-2 rounded-md outline-none  border-gray-200 focus:border-gray-300"
              />
            </div>

            <div className="mb-5">
              <label for="email_address" className="sr-only">
                Email Address
              </label>

              <input
                type="text"
                placeholder="Your Email"
                className="w-full px-4 py-3 border-2 rounded-md outline-none  border-gray-200 focus:border-gray-300"
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 border-2 rounded-md outline-none  border-gray-200 focus:border-gray-300 h-36"
                name="message"
              ></textarea>
            </div>

            <button disabled>
              <Button label={"Send Message"} />
            </button>
          </form>
        </div>
      </div>

      <GoogleMap />
    </Containter>
  );
};

export default ContactPageMain;
