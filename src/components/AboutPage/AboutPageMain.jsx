import aboutImg from "../../assets/images/about-us-banner.png";
import Containter from "../reusable/Containter";
import SectionImg from "../reusable/SectionImg";
import AboutSufizaProperty from "./AboutSufizaProperty";

const AboutPageMain = () => {
  return (
    <Containter>
      {/* section img */}
      <SectionImg
        data={{
          src: aboutImg,
          alt: "About image",
        }}
      />

      {/* about contents */}
      <AboutSufizaProperty />
    </Containter>
  );
};

export default AboutPageMain;
