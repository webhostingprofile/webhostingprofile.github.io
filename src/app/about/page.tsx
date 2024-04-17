import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Excite Management",
  description: "This is About Page Excite Management",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName=""
        description=""
      />
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      <AboutSectionThree />
    </>
  );
};

export default AboutPage;
