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
    <header className="relative w-screen z-10">
      <div
        ref={ref}
        className="top-0 shadow shadow-gray-400 w-screen h-16 bg-gray-400 dark:bg-gray-800 px-4 flex flex-row justify-between items-center gap-4"
      >
        <img
          src={logo}
          alt="Weather App Logo"
          className="max-[400px]:w-30 lg:w-50 h-40 w-40"
        />
        <ThemeButton />
        <Unit />
      </div>
      <div className="p-2 bg-linear-to-r from-purple-500 via-red-950 to-yellow-600 bg-clip-text text-transparent dark:text-white font-extrabold dark:font-bold text-5xl md:text-5xl text-center w-screen mt-4 whitespace-pre md:whitespace-nowrap md:mt-5 md:mb-5">
        {"How's the\n sky looking\n today?"}
      </div>
    </header>
  );
};

export default Header;
