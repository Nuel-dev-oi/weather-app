import React, { useRef, useEffect } from "react";
import ThemeButton from "./ThemeButton.jsx";
import logo from "../assets/images/logo.svg";
import Unit from "./Unit.jsx";

const Header = () => {
  const ref = useRef();
  
  useEffect(() => {
  const header = ref.current;
  let ticking = false; // This is our "lock"

  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollPos = window.scrollY;
        
        if (scrollPos > 0) {
          header.classList.add("fixed");
        } else {
          header.classList.remove("fixed");
        }
        
        ticking = false; // Unlock once the frame is rendered
      });

      ticking = true; // Lock it
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header className="relative">
      <div ref={ref} className="top-0 shadow shadow-gray-400 w-screen h-16 bg-gray-400 dark:bg-gray-800 px-4 flex flex-row justify-between items-center gap-4">
        <img src={logo} alt="Weather App Logo" className="lg:w-50 h-40 w-40" />
        <ThemeButton />
        <Unit />
      </div>
      <div className="dark:text-white font-bold text-5xl lg:text-4xl text-center w-screen mt-4 whitespace-pre md:whitespace-nowrap md:mt-5 md:mb-5">
        {"How's the\n sky looking\n today?"}
      </div>
    </header>
  );
};

export default Header;
