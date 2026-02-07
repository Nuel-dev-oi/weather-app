import React from "react";
import ThemeButton from "./ThemeButton.jsx";
import logo from "../assets/images/logo.svg";
import Unit from "./Unit.jsx";

const Header = () => {
    return (
        <header>
            <div className="shadow shadow-gray-400 w-screen h-16 bg-gray-400 dark:bg-gray-800 px-4 flex flex-row justify-between items-center gap-4">
                <img src={logo} alt="Weather App Logo" className="lg:w-50 h-40 w-40" />
                <ThemeButton />
                <Unit />
            </div>
            <div className="dark:text-white font-bold text-5xl lg:text-4xl text-center w-screen mt-4 whitespace-pre md:whitespace-nowrap md:mt-5 md:mb-5">
               {
                "How's the\n sky looking\n today?"
               }
            </div>
        </header>
    ); 
};

export default Header;