import servicesImg from "../../assets/images/services-banner.png";
import { ourServices, servicesContents } from "../../data/data";
import Containter from "../reusable/Containter";
import Heading from "../reusable/Heading";
import Paragraph from "../reusable/Paragraph";
import SectionImg from "../reusable/SectionImg";

const ServicesPageMain = () => {
  return (
    <Containter>
      {/* section img */}
      <SectionImg
        data={{
          src: servicesImg,
          alt: "Services us banner image",
        }}
      />

      {/* lists */}
      <div className="my-10 p-6 space-y-4 text-gray-950">
        {/* title */}
        <Heading
          title={"Our Service"}
          style={"text-center font-semibold text-2xl md:text-4xl mb-6"}
        />

        {/* list */}
        <ul className="list-disc  list-inside space-y-2">
          {ourServices?.map(({ service }, idx) => (
            <li key={idx} className="font-medium">
              {service}
            </li>
          ))}
        </ul>
      </div>

      {/* contents */}
      <div className="space-y-4">
        {servicesContents?.map(({ para }, idx) => (
          <Paragraph para={para} key={idx} />
        ))}
      </div>
    </Containter>
  );
};

export default ServicesPageMain;
