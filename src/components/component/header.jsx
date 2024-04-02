'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import '../../styles/general.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleJoinClick = () => {
    window.location.href = "https://640a5kd0qt7.typeform.com/to/KbO92R1f";
  };

  return (
    <div className="bg-white w-full relative justify-center z-10">
      <Image
        alt="Model on car"
        className="h-[calc(100vh-80px)] w-full object-cover z-minus-1"
        src="/Finishedmodel.jpg"
        width={1200}
        height={100}
        priority
      />
      <nav className="container mx-auto flex items-center justify-between p-5 text-white absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center space-x-4">
          {/* <Image
            src="/FINAL_LOGO_NOBG.png"
            alt="Logo"
            width={130}
            height={50}
            priority
          /> */}
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
      {/* Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-6 text-center text-white z-10">
        <h1 className="text-6xl font-bold">EXCITE</h1>
        <p className="text-xl">
          EXCITE YOUR FANS,
          <br />
          IGNITE YOUR SUCCESS
        </p>
        <Button
          className="site-button px-6 py-2 text-white"
          onClick={handleJoinClick}
        >
          JOIN EXCITE
        </Button>
        {/* Icons */}
        <div className="absolute mx-auto mb-10 flex w-full max-w-md justify-between z-10">
          <div className="text-center pr-2">
            <ScalingIcon className="mx-auto  mb-2 h-6 w-6" />
            <span className="block text-sm" style={{ color: 'white', fontWeight: 'bold' }}>GROWTH MANAGEMENT</span>
          </div>
          <div className="text-center pl-2">
            <UsersIcon className="mx-auto mb-2 h-6 w-6" />
            <span className="block text-sm" style={{ color: 'white', fontWeight: 'bold' }}>ACCOUNT MANAGEMENT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Icons components
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
