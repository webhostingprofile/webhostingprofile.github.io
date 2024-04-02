"use client";

import { useState, useEffect } from "react";

import { PrivacyPolicy } from "@/components/component/privacy-policy";
function PrivacyPage() {
  const [pinkShade, setPinkShade] = useState("#D19DC1");

  // Function to generate a random shade of pink within the specified range
  const generateRandomPink = () => {
    // Define the RGB values for the lightest and darkest pink shades
    const lightestPink = [209, 157, 193]; // D19DC1
    const darkestPink = [248, 70, 218]; // rgb(248, 70, 218)

    // Generate random values for each RGB component within the specified range
    const randomRed =
      Math.floor(Math.random() * (darkestPink[0] - lightestPink[0] + 1)) +
      lightestPink[0];
    const randomGreen =
      Math.floor(Math.random() * (darkestPink[1] - lightestPink[1] + 1)) +
      lightestPink[1];
    const randomBlue =
      Math.floor(Math.random() * (darkestPink[2] - lightestPink[2] + 1)) +
      lightestPink[2];

    // Return the random pink color as a string in the "rgb(...)" format
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  };

  // Function to update the pink shade color every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPinkShade(generateRandomPink());
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main
      className="  items-center  w-full"
      style={{ backgroundColor: pinkShade, transition: "background-color 1s" }}
    >
      <div style={{ height: "100%" }}>
        <PrivacyPolicy />
      </div>
    </main>
  );
}

export default PrivacyPage;
