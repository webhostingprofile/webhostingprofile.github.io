'use client'
import { useState, useEffect } from "react";
import { NavBar } from "./navbar";
import { hourglass } from "ldrs";
import { Transition } from "@headlessui/react";



export function Services() {

  // hourglass.register();
  const [expandedItems, setExpandedItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const toggleExpand = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >= aboutRef.current.offsetTop &&
      window.scrollY <= aboutRef.current.offsetTop + aboutRef.current.offsetHeight
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black">
      <NavBar textColor={"black"}/>
      
      <div className="bg-white p-8 mt-20">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="flex-1 space-y-6">
            <div className="flex items-center">
              <div className="text-pink-600 text-xs uppercase tracking-widest mr-2">Our Services</div>
              <l-hourglass
                size="40"
                bg-opacity="0.1"
                speed="1.75"
                color="black"
              ></l-hourglass>
            </div>
            <h2 className="text-4xl font-bold" style={{color: '#414141'}}>Services On Offer</h2>
            <p className="text-gray-600">
              Our team at Creatr is dedicated to empowering your OnlyFans journey with expertise, innovation, and a deep
              understanding of your unique brand. Together, we focus on maximising your potential and bringing your
              creative vision to life.
            </p>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="border-t pt-4" onClick={() => toggleExpand(index)}>
                  <div className="flex items-center cursor-pointer">
                    <PlusIcon className={`text-gray-600 ${expandedItems.includes(index) ? 'transform rotate-45' : ''}`} />
                    <span className="ml-2" style={{color: '#414141'}}>{service.title}</span>
                  </div>
                  <Transition
                    show={expandedItems.includes(index)}
                    enter="transition-opacity duration-1000 ease-in"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    className="text-gray-600"
                  >
                    <p>{service.description}</p>
                  </Transition>
                </div>
              ))}
            </div>
          </div>
      <Transition
        show={true}
        enter="transition-opacity duration-1000 ease-in"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        className="w-1/2 flex justify-center items-center" // Center the content horizontally and vertically
      >
            <div className="flex-1">
              <img
                alt="Team member smiling"
                className="rounded-lg mt-6 lg:mt-0"
                src="/ServicesGirl.png"
                width="600"
              />
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
}

function PlusIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

const services = [
  {
    title: "Customised Content Strategy and Planning",
    description: "A customised content strategy for the content creator, ensuring a consistent & engaging flow of content across different social media platforms",
  },
  {
    title: "Audience Engagement and Boosting Accounts",
    description: "The service engages with subscribers, responds to comments, and implements strategies to build a loyal fan base, enhancing the overall user experience and creator-subscriber relationships.",
  },
  {
    title: "Promotion and Marketing for Creator",
    description: "The management team implements marketing strategies, utilizes social media channels, and explores promotional opportunities to increase visibility, attract new subscribers, and drive revenue growth.",
  },
  {
    title: "Financial Management and Guidance",
    description: "The service provides comprehensive financial management, handling subscription renewals, payment processing, and analyzing financial performance. Creators receive insights into their earnings, subscriber trends, and other key metrics, empowering them with data-driven decisions to optimize their revenue streams.",
  },
];
