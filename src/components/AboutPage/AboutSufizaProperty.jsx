import React from "react";
import { aboutContents } from "../../data/data";
import Heading from "../reusable/Heading";
import Paragraph from "../reusable/Paragraph";
import WhyChooseList from "./WhyChooseLIst";

const AboutSufizaProperty = () => {
  return (
    <div className="my-10 p-6 space-y-4 text-gray-950">
      {/* title */}
      <Heading
        title={"About Sufiza Property"}
        style={"text-center font-semibold text-2xl md:text-4xl mb-6"}
      />

      {/* contents */}
      <div className="space-y-4">
        <p>
          Welcome to{" "}
          <span className="font-semibold italic">
            *Sufiza Property Solutions*
          </span>{" "}
          – your trusted partner in real estate. As a proud sister concern of
          the renowned{" "}
          <span className="font-semibold italic">*Sufiza Group*</span>, we
          specialize in providing comprehensive, hassle-free property solutions
          tailored to your needs. Whether you're looking to buy, sell, or rent,
          we offer a one-stop solution that takes the stress out of real estate
          transactions.
        </p>

        {aboutContents?.map(({ para }, idx) => (
          <Paragraph para={para} key={idx} />
        ))}
      </div>

      {/* why choose list */}
      <WhyChooseList />

      <p>
        <span className="font-semibold italic">
          *Sufiza Property Solutions*
        </span>{" "}
        we’re not just selling properties – we’re helping you build your future.
      </p>

      <p>
        At{" "}
        <span className="font-semibold italic">
          *Sufiza Property Solutions*
        </span>{" "}
        we’re not just selling properties – we’re helping you build your future.
      </p>

      <Paragraph para={"Let’s make your property dreams a reality today!"} />
    </div>
  );
};

export default AboutSufizaProperty;
