'use client';
import Image from "next/image";
import ImageBackgroundComponent from "./AboutCard";
import { useLayoutEffect, useState } from 'react';


const AboutSectionTwo = () => {

  const [isMobile, setIsMobile] = useState(false);

  const componentTitle = "ACCOUNT MANAGEMENT, WITH BENEFITS"
  const componentText = "Unrivaled Onlyfans Managers. Unparalleled Account Strategy. A process that inspires you to achieve and a consistency that keeps your account earning 24/7."
  const componentButton = "Learn More →"  // Added the arrow icon here

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  }

  useLayoutEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);


  return (
    <section id="home" className="relative overflow-hidden py-16  ">
      <div className="absolute inset-0 w-full z-0">
        <Image 
         src={isMobile ? "/images/girlImage10.jpg" : "/images/girlImage11.jpg"}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority 
        />
      </div>
      <div className="container z-10">
          <ImageBackgroundComponent title={componentTitle} text={componentText} buttonText={componentButton} />
      </div>
    </section>
  );
  
};

export default AboutSectionTwo;
