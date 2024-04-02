'use client'

import { Button } from "@/components/ui/button";
import { NavBar } from "./navbar";
import { useState, useEffect } from "react";
import { quantum, ripples } from 'ldrs'

quantum.register()
ripples.register();

export function Mission() {

  const [pinkShade, setPinkShade] = useState("#D19DC1");

  // Function to generate a random shade of pink within the specified range
  const generateRandomPink = () => {
    // Define the RGB values for the lightest and darkest pink shades
    const lightestPink = [209, 157, 193]; // D19DC1
    const darkestPink = [248, 70, 218]; // rgb(248, 70, 218)

    // Generate random values for each RGB component within the specified range
    const randomRed = Math.floor(Math.random() * (darkestPink[0] - lightestPink[0] + 1)) + lightestPink[0];
    const randomGreen = Math.floor(Math.random() * (darkestPink[1] - lightestPink[1] + 1)) + lightestPink[1];
    const randomBlue = Math.floor(Math.random() * (darkestPink[2] - lightestPink[2] + 1)) + lightestPink[2];

    // Return the random pink color as a string in the "rgb(...)" format
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  };

  const handleApplyClick = () => {
    window.location.href = "https://640a5kd0qt7.typeform.com/to/KbO92R1f";
  }

  // Function to update the pink shade color every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPinkShade(generateRandomPink());
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between p-8 relative"
      style={{ backgroundColor: pinkShade, transition: "background-color 1s" }}
    >
      <NavBar />
      <div style={{ position: "relative", zIndex: 1 }}>
        <header className="flex justify-center w-full mb-8">
          <img
            alt="Excite Logo"
            height="270"
            src="/FINAL_LOGO_NOBG.png"
            width="250"
          />
        </header>

  <main className="flex flex-col items-center text-center space-y-3">
    
    <h1 className="text-4xl font-bold text-white mb-4">
      At EXCITE, our passion lies in empowering content creators to thrive on OnlyFans.
    </h1>
    <p className="text-lg text-white mb-8 px-4">
      Founded by a team of industry experts with a unified vision for transforming digital content management, EXCITE is more than just an agency – it's a dynamic entity dedicated to propelling creators towards unparalleled success.
    </p>
    <hr className="border-gray-300 my-8" />
      <div className="border-t pt-4" >
    <span className="text-lg text-white">
      Our team brings together a wealth of experience in digital marketing, social media management, and talent representation.
    </span>
    <br/>
    <span className="text-lg text-white">
       We grasp the unique challenges and opportunities that creators encounter in the digital realm, and we are committed to delivering tailored solutions that cater to their specific requirements.
    </span>
    </div>
    <hr className="border-gray-300 my-8" />
    <div className="border-t pt-4">
    <span className="text-lg text-white">
      At EXCITE, we champion collaboration and community. We collaborate closely with each of our clients to devise bespoke strategies that maximise their potential and amplify their presence on OnlyFans. 
    </span>
    <br></br>
    <span className="text-lg text-white">
      Whether it involves fine-tuning content, engaging with fans, or navigating the platform's evolving policies, we provide expert guidance and unwavering support throughout.
    </span>
    </div>
    <hr className="border-gray-300 my-8" />
    <div className="border-t pt-4">
    <span className="text-lg text-white">
      Transparency, integrity, and innovation are the cornerstones of our approach. 
    </span>
    <br/>
    <span className="text-lg text-white">
      We uphold open communication, ethical standards, and cutting-edge methodologies to surpass expectations. Our goal extends beyond mere account management
    </span>
    <br/>
    <span className="text-lg text-white">
      We aspire to inspire, empower, and equip creators to realise their aspirations.
    </span>
    </div>
    <hr className="border-gray-300 my-8" />
    <div className="border-t pt-4">
    <span className="text-lg text-white">
      Join us at EXCITE and experience firsthand the transformative impact of dedicated support and strategic guidance on your OnlyFans journey. 
    </span>
    <br/>
    <span className="text-lg text-white mb-18">
      Together, we'll uncover new avenues, unleash your creativity, and ignite your triumph in the digital arena.
    </span>
    </div>
  </main>



      </div>
      {/* Images positioned around the paragraph */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/TestimonialOne.png"
          alt="Image 1"
          className="absolute top-10 left-1/4 sm:left-1/6 transform "
        />
        <img
          src="/TestimonialTwo.png"
          alt="Image 2"
          className="absolute top-10 right-1/4 sm:right-1/6 transform "
        />
        {/* <img
          src="/TestimonialFive.png"
          alt="Image 5"
          className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        /> */}
      </div>
      <footer className="flex flex-col items-center space-y-4 mt-10">
        <div className="flex space-x-8">
          <a className="text-white" href="#">
            PRIVACY POLICY
          </a>
          <a className="text-white" href="#">
            T&Q'S
          </a>
          <a className="text-white" href="#">
            COOKIES
          </a>
        </div>
        <div className="flex space-x-8">
          <a className="text-white" href="mailto:management@exciteofm.com">
            MAIL US
          </a>
          <a className="text-white" href="https://linktr.ee/exciteofm">
            FOLLOW US
          </a>
        </div>
        <p className="text-xs text-white">© 2024 EXCITE. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
