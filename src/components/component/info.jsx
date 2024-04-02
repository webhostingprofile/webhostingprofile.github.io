'use client'

import { Button } from "@/components/ui/button";
import { NavBar } from "./navbar";
import { useState, useEffect } from "react";
import { quantum, ripples } from 'ldrs'



export function Info() {

//   quantum.register()
// ripples.register();
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
        <header className="flex justify-center w-full mb-8 mt-10">
          <img
            alt="Excite Logo"
            height="270"
            src="/FINAL_LOGO_NOBG.png"
            width="250"
          />
        </header>
        <main className="flex flex-col items-center text-center space-y-8 mt-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            EXCITE EMERGED FROM A SIMPLE YET POWERFUL IDEA
          </h1>
          <p className="text-lg text-white mb-8">
            An idea conceived as a response to the growing need for a more personalised approach in the OnlyFans community. By delving deep into what makes each personality and aesthetic tick, we craft management strategies that resonate.
            This isn’t just management; it’s a finely-tuned understanding of our clients, transforming how we market them.
            The result? Sharper strategies, standout management, and a surge in revenue for all. It’s not just about managing accounts; it’s about understanding stories, celebrating uniqueness, and turning these insights into success.
          </p>
          <Button className="site-button py-2 px-8 rounded-full" onClick={handleApplyClick}>APPLY HERE</Button>
          {/* <p className="text-lg text-white">GOT QUESTIONS? WE HAVE THE ANSWERS</p> */}
        </main>
      </div>
      {/* Images positioned around the paragraph */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden md:flex">
        <img
          src="/TestimonialOne.png"
          alt="Image 1"
          className="absolute top-10 left-1/4 sm:left-1/6 transform "
        />
        <img
          src="/TestimonialTwo.png"
          alt="Image 2"
          className="absolute top-80 right-1/4 sm:right-1/6 transform translate-x-1/2 -translate-y-1/2"
        />
        <img
          src="/TestimonialFive.png"
          alt="Image 5"
          className="absolute top-3/4 left-1/4 transform -translate-y-1/2"
        />
        <img
          src="/TestimonialThree.png"
          alt="Image 3"
          style={{height: '200px'}}
          className="absolute top-3/4 right-1/4 transform -translate-y-1/2" 
        />
      </div>
      <footer className="flex flex-col items-center space-y-4">
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
