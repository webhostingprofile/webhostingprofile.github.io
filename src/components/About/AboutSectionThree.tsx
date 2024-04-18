'use client';
import Image from "next/image";
import ImageBackgroundComponent from "./AboutCard";
import { useLayoutEffect, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

const AboutSectionThree = () => {

  const [isMobile, setIsMobile] = useState(false);

  const componentTitle = "About Us"
  const componentText = "Unrivaled Onlyfans Managers. Unparalleled Account Strategy. A process that inspires you to achieve and a consistency that keeps your account earning 24/7."
  const componentButton = "Become an Excite Client →";  // Added the arrow icon here

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  }

  useLayoutEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <>
      {/* Background image section */}
      <section className="relative overflow-hidden py-16">
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

      {/* Text and images section */}
      <section className="py-2 bg-white">
        <div className="container flex justify-center items-center flex-wrap mt-4">
          {/* Content */}
          <div className="text-center w-full">
            {/* Text parts */}
            <div className={`mb-8 ${isMobile ? 'flex flex-col' : 'flex justify-center'}`}>
              {/* "Who We Are" header */}
              <div className={`${isMobile ? 'mb-4' : 'w-1/2 mr-4  flex justify-center items-center'}`}>
                <h2 className="text-3xl font-bold" style={{ color: 'black' }}>Who We Are</h2>
              </div>
              {/* Description text */}
              <div className={`${isMobile ? '' : 'w-1/2 mr-4  flex justify-center items-center mt-4'}`}>
                <p className="text-lg text-left leading-normal" style={{ color: 'black' }}>
                  Introducing EXCITE – your dedicated partner in navigating the dynamic world of OnlyFans. With a powerhouse team of over 120 skilled professionals, we pride ourselves on delivering top-notch support to both established stars and rising talents. At EXCITE, our mission is crystal clear: to empower creators and models to reach new heights of success.<br/><br/>
                  Driven by a passion for excellence, we approach every aspect of our work with professionalism and a sharp business mindset. Whether you are a seasoned pro or just starting out, EXCITE is here to ensure your journey on OnlyFans is nothing short of remarkable.
                </p>
              </div>
            </div>
            {/* Images */}
            <div className="flex justify-center flex-wrap mb-8">
              {/* Image 1 */}
              {/* <div className="mx-2 my-2 mb-4" style={{height: '400px', width: '200px'}}>
                <Image src="/images/insta/insta8.jpg" alt="Image 1" width={200} height={100} objectFit="cover" />
              </div> */}

              {/* Image 2 */}
              <div className="mx-2 mb-4" style={{height: '300px', width: '200px'}}>
                <Image src="/images/insta/insta2.jpg" alt="Image 2" width={200} height={100} objectFit="cover" />
              </div>

              {/* Image 3 */}
              <div className="mx-2 mb-4" style={{height: '300px', width: '200px'}}>
                <Image src="/images/insta/insta3.jpg" alt="Image 3" width={200} height={100} objectFit="cover" />
              </div>
              
              {/* Image 4 */}
              <div className="mx-2 mb-4" style={{height: '300px', width: '200px'}}>
                <Image src="/images/insta/insta4.jpg" alt="Image 4" width={200} height={100} objectFit="cover" />
              </div>
              
              {/* Image 5 */}
              {/* <div className="mx-2 mb-4" style={{height: '400px', width: '200px'}}>
                <Image src="/images/insta/insta5.jpg" alt="Image 5" width={200} height={100} objectFit="cover" />
              </div> */}
              
              {/* Image 6 */}
              <div className="mx-2 mb-4"style={{height: '300px', width: '200px'}}>
                <Image src="/images/insta/insta6v1.jpg" alt="Image 6" width={200} height={100} objectFit="cover" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center mb-4 mt-4">
              <a href="https://www.instagram.com/exciteofm" target="_blank" rel="noopener noreferrer" className="rounded-md follow-instagram bg-black text-white py-2 px-4 mr-4 flex items-center">
                <span>Follow On Instagram</span>
                <FaInstagram className="ml-2" />
              </a>
              {/* <button className="bg-blue-500 text-white py-2 px-4">Button 2</button> */}
            </div>
          </div>
        </div>

         {/* About Us Text */}
  {/* <div className="container flex justify-center items-center mt-2">

    <div className="text-center">

      <div className="mb-8 flex justify-center">
      <div className="w-1/2 mr-4 mt-10 flex justify-center items-center">
          <h2 className="text-3xl font-bold" style={{ color: 'black' }}>About Us</h2>
        </div>
      
        <div className="w-1/2 ml-4">
          <p className="text-lg text-left leading-normal" style={{ color: 'black' }}>
            Welcome to Excite Management, where we're dedicated to propelling creators to new heights on OnlyFans. Founded with a passion for supporting content creators, our team brings together a wealth of expertise in digital marketing, social media management, and talent representation. <br/><br/>
            At Excite Management, we understand the unique challenges and opportunities that creators face in the dynamic landscape of digital content creation. We're here to provide personalized solutions tailored to your individual needs, whether you're just starting out or looking to elevate your presence on OnlyFans. <br/><br/>
            Our mission is to empower creators like you to thrive on the platform, enabling you to connect with your audience authentically and maximize your earning potential. We believe in transparency, integrity, and innovation, and we're committed to delivering results that exceed your expectations. <br/><br/>
            Join us at Excite Management and discover the difference that dedicated support and strategic guidance can make in your OnlyFans journey. Together, we'll unlock new opportunities, unleash your creativity, and ignite your success in the digital realm.
          </p>
        </div>
      </div>
    </div>
  </div> */}
      </section>
    </>
  );
};

export default AboutSectionThree;
