import React from "react";
import Containter from "../reusable/Containter";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const FooterMain = () => {
  return (
    <Containter style={"pt-10 lg:pt-20 pb-5"}>
      {/* footer top */}
      <FooterTop />

      {/* footer boottom */}
      <FooterBottom />
    </Containter>
  );
};

export default FooterMain;
