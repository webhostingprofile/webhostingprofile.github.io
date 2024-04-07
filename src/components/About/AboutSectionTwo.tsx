import Image from "next/image";
import ImageBackgroundComponent from "./AboutCard";



const AboutSectionTwo = () => {

  const componentTitle = "ACCOUNT MANAGEMENT, WITH BENEFITS"
  const componentText = "Unrivaled Onlyfans Managers. Unparalleled Account Strategy. A process that inspires you to achieve and a consistency that keeps your account earning 24/7."
  const componentButton = "Learn More →"  // Added the arrow icon here

  return (
    <section className="py-16 md:py-20 lg:py-28 " style={{
                backgroundImage: "url('/images/girlImage5.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
    }}>
      <div className="container">
          <ImageBackgroundComponent title={componentTitle} text={componentText} buttonText={componentButton} />
      </div>
    </section>
  );
  
};

export default AboutSectionTwo;
