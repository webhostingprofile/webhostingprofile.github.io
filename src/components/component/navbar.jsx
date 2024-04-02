'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import '../../styles/general.css';
import { useState } from 'react';

export function NavBar({textColor}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  const handleJoinClick = () => {
    window.location.href = "https://640a5kd0qt7.typeform.com/to/KbO92R1f";
  };



  return (
   
      <nav className="container flex items-center justify-between p-5 text-black absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center space-x-4">
          <Image
            src="/FINAL_LOGO_NOBG.png"
            alt="Logo"
            width={130}
            height={50}
            priority
          />
          {/* Navigation links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2`}
          >
            <Link className="hover:underline" href="/">
              HOME
            </Link>
            <div className="relative group">
              <Link className="hover:underline" href="#">
                SERVICES
              </Link>
              <div className="absolute left-0 hidden w-40 space-y-2 bg-white py-2 px-4 text-black group-hover:block">
                <Link className="block hover:underline" href="/services">
                  Our Services
                </Link>
              </div>
            </div>
              <div className="relative group">
                <Link className="hover:underline" href="#">
                  CONTACT
                </Link>
              <div className="absolute left-0 hidden w-40 space-y-2 bg-white py-2 px-4 text-black group-hover:block">
                  <Link className="block hover:underline" href="https://640a5kd0qt7.typeform.com/to/KbO92R1f">
                    Work With Us
                  </Link>
                  <Link className="block hover:underline" href="mailto:management@exciteofm.com">
                    Email Us
                  </Link>
                </div>
              </div>
            <div className="relative group">
              <Link className="hover:underline" href="#">
                ABOUT
              </Link>
              <div className="absolute left-0 hidden w-40 space-y-2 bg-white py-2 px-4 text-black group-hover:block">
                <Link className="block hover:underline" href="/info">
                  About Us
                </Link>
                <Link className="block hover:underline" href="/mission">
                  Our Mission
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Hamburger menu icon for mobile */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-pink-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>
        {/* Button */}
        <Button
          className="site-button hidden px-6 py-2 text-white md:block"
          onClick={handleJoinClick}
        >
          JOIN EXCITE
        </Button>
      </nav>
     
  );
}
