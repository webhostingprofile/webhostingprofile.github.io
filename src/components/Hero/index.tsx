'use client';
import Link from "next/link";
import Image from "next/image";
import { useLayoutEffect, useState } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the screen is mobile
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust this value according to your breakpoint
  };

  // Call the function when component mounts and on window resize
  useLayoutEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-white pb-16 pt-[120px] dark:bg-pink md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full z-0"> {/* Set z-index to 0 */}
          <Image
            src={isMobile ? "/images/girlImagemobile.jpg" : "/images/girlDesktopImage.jpg"}
            alt="Background Image"
            layout="fill" // Fill the container
            objectFit="cover" // Maintain aspect ratio and cover container
            quality={100} // Image quality
            priority 
          />
        </div>
        <div className="container relative z-10"> {/* Set z-index to higher value than the background image */}
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                   EXCITE YOUR FANS, IGNITE YOUR SUCCESS 
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg  md:text-xl">
                  <b>EXCITE Growth Management</b> – Where sophistication meets strategy. We start by thoroughly understanding you as
                  a creator, crafting a multi-platform growth plan that fits your unique niche perfectly. Our custom-built
                  marketing funnels are designed for maximum conversion effectiveness, and we manage your social media
                  presence to ensure it’s as engaging and distinctive as your brand.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <div className="absolute mx-auto mb-10 flex w-full max-w-md justify-between z-20"> {/* Set z-index to higher value than the background image */}
                    <div className="text-center pr-2 ">
                      <ScalingIcon className="mx-auto mt-8 mb-2 h-6 w-6 " />
                      <span className="block text-sm text-black dark:text-white ml-2" style={{ fontWeight: 'bold' }}>GROWTH MANAGEMENT</span>
                    </div>
                    <div className="text-center pl-2">
                      <UsersIcon className="mx-auto mt-8 mb-2 h-6 w-6" />
                      <span className="block text-sm text-black dark:text-white mr-2" style={{ fontWeight: 'bold' }}>ACCOUNT MANAGEMENT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function ScalingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white" // Change "currentColor" to "black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 3 9 15" />
      <path d="M12 3H3v18h18v-9" />
      <path d="M16 3h5v5" />
      <path d="M14 15H9v-5" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white" // Change "currentColor" to "black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default Hero;
