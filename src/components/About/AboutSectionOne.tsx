'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";


const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-black">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-darkblack">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  const [isMobile, setIsMobile] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1900 && window.innerHeight >= 1200);
    };

    checkIsMobile();
    checkScreenSize();

    window.addEventListener('resize', () => {
      checkIsMobile();
      checkScreenSize();
    });

    return () => window.removeEventListener('resize', () => {
      checkIsMobile();
      checkScreenSize();
    });
  }, []);

  const marginValue = isMobile ? "180px" : "44px";
  const marginBottomValue = isMobile ? "-120px" : "44px";
  const paddingBottomValue = isLargeScreen ? "40px" : "16px"; // Adjust as needed

  return (
    <section id="about" className={`pt-8 mt-5 md:pt-20 lg:pt-28 bg-white ${isLargeScreen ? 'pb-40' : ''}`}>
      <div className="container pt-8 mt-5">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2" style={{color: 'black', marginBottom: marginBottomValue}}>
              <SectionTitle
                title="Our Services"
                paragraph="Our team at Excite is dedicated to empowering your OnlyFans journey with expertise, innovation, and a deep understanding of your unique brand. Together, we focus on maximising your potential and bringing your creative vision to life."
                mb={marginValue}
              />

              <div className="mb-12 max-w-[570px] lg:mb-0">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2 single-feature">
                    <List text="Customised Content Strategy and Planning" />
                    <List text="Promotion and Marketing for Creator" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2 single-feature">
                    <List text="Audience Engagement and Boosting Accounts" />
                    <List text="Financial Management and Guidance" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:mt-20 lg:pt-10 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/dashboardImageQuality.png"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
