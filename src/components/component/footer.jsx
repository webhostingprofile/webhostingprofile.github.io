'use client';

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react";
import { quantum, ripples } from 'ldrs'

quantum.register()
ripples.register();

export function Footer() {

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
        className="w-full"
        style={{ backgroundColor: pinkShade, transition: "background-color 1s" }}
      >

        <div style={{ position: "relative", zIndex: 1 }} className="w-full">
          <header className="flex justify-center w-full mb-8">
            <img
              alt="Excite Logo"
              height="270"
              src="/FINAL_LOGO_NOBG.png"
              width="250"
            />
          </header>
          <main className="flex flex-col items-center text-center space-y-8 w-full">
            <div style={{ position: "relative", zIndex: 1 }}>
              <l-ripples
                size="150"
                speed="2"
                color="white"
                style={{ position: "absolute", top: 0, left: '-10%', right: 0, bottom: 0, zIndex: 0 }}
              ></l-ripples>
              <l-ripples
                size="150"
                speed="2"
                color="black"
                style={{ position: "absolute", top: 10, left: '-9%', right: 0, bottom: 0, zIndex: 0 }}
              ></l-ripples>
              <l-ripples
                size="150"
                speed="2"
                color="white"
                style={{ position: "absolute", top: 0, left: '91%', right: 0, bottom: 0, zIndex: 0 }}
              ></l-ripples>
              <l-ripples
                size="150"
                speed="2"
                color="black"
                style={{ position: "absolute", top: 10, left: '90%', right: 0, bottom: 0, zIndex: 0 }}
              ></l-ripples>
              <div style={{ position: "relative", zIndex: 1 }}>
                <h1 className="text-8xl text-yellow-300">
                  UNLOCK YOUR
                </h1>
                <h1 className="text-8xl font-bold text-yellow-300" style={{ fontSize: "8rem" }}>
                  POTENTIAL
                </h1>
                <h1 className="text-8xl text-yellow-300">
                  WITH <span className="font-bold text-8xl" style={{ fontSize: '8rem' }}>EXCITE</span>
                </h1>
              </div>
            </div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="flex items-center">
                <l-quantum
                  size="45"
                  speed="1.75" 
                  color="black" 
                ></l-quantum>
                <p className="text-xl">WE ARE LOOKING FOR TALENT DRIVEN TO REACH THE 0.1%</p>
                <l-quantum
                  size="45"
                  speed="1.75" 
                  color="black" 
                ></l-quantum>
              </div>
            </div>
            <Button className="site-button py-2 px-8 rounded-full" onClick={handleApplyClick}>APPLY HERE</Button>
            <p className="text-lg">GOT QUESTIONS? WE HAVE THE ANSWERS</p>
          </main>
        </div>
        <footer className="flex flex-col items-center space-y-4">
          <div className="flex space-x-8">
            <a className="text-white" href="/privacy">
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