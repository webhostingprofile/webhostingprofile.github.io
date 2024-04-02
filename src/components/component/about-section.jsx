"use client";

import { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import '../../styles/about.css';

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const redirectAboutUs = () => {
    window.location.href = "/services";
  }

  useEffect(() => {
    const handleScroll = () => {
      if (
        aboutRef.current &&
        window.scrollY + window.innerHeight >= aboutRef.current.offsetTop &&
        window.scrollY <= aboutRef.current.offsetTop + aboutRef.current.offsetHeight
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about-container flex relative" ref={aboutRef}>
      {/* SVG Background Image */}
      <div className="absolute inset-0 z-0">
      <img src="/gradient.svg" className="w-full h-full object-cover" alt="Background Image" />
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fillOpacity="1" d="M0,96L48,117.3C96,139,192,181,288,192C384,203,480,181,576,149.3C672,117,768,75,864,85.3C960,96,1056,160,1152,181.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg> */}
      </div>
      <Transition
        show={isVisible}
        enter="transition-opacity duration-1000 ease-in"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        className="w-1/2 flex justify-center items-center z-10" // Center the content horizontally and vertically
      >
        <div className="image-container">
          <Image
            alt="Creative"
            className="image"
            height="968"
            src="/OFMModelHeader.jpg"
            style={{
              aspectRatio: "926/968",
              objectFit: "cover",
            }}
            width="926"
          />
        </div>
      </Transition>
      <div className="content w-1/2 p-8 z-10 relative">
        <Transition
          show={isVisible}
          enter="transition-opacity duration-1000 ease-in"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="mb-4">
            <Badge className="bg-pink">GROWTH MANAGEMENT</Badge>
          </div>
          <h1 className="text-6xl font-bold mb-6">
            YOUR VISION,
            <br />
            OUR BLUEPRINT
          </h1>
          <p className="text-lg mb-8">
            <b>EXCITE Growth Management</b> – Where sophistication meets strategy. We start by thoroughly understanding you as
            a creator, crafting a multi-platform growth plan that fits your unique niche perfectly. Our custom-built
            marketing funnels are designed for maximum conversion effectiveness, and we manage your social media
            presence to ensure it’s as engaging and distinctive as your brand.
          </p>
          <Button className="about-button  px-6 py-2 text-white md:block mr-4" onClick={redirectAboutUs}>Learn More</Button>
        </Transition>
      </div>
    </div>
  );
}
