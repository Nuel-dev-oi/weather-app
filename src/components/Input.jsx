import React from "react";
import searchIcon from "../assets/images/icon-search.svg";


const Input = () => {

    return (
        <form className="flex flex-col h-max w-screen p-4 md:justify-center justify-between items-center gap-2 md:flex-row md:gap-2">
            <div className="md:grow-0 grow w-[90%] flex mt-2 md:mt-0 md:h-12 h-10 md:justify-center justify-start gap-0 md:w-[50%]">
                <img src={searchIcon} alt="Search Icon" className="rounded-[10px_0px_0px_10px] w-15 h-full p-2 pl-8 bg-gray-500 dark:bg-gray-700" />    
                <input 
                    type="search" 
                    placeholder="Search for a place..." 
                    className="dark:placeholder:text-white grow p-2 rounded-[0px_10px_10px_0px] border-gray-300 dark:border-gray-600 bg-gray-500 dark:bg-gray-700 text-black dark:text-white outline-0 focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <input 
                type="submit" 
                value="Search" 
                className="md:h-12 md:w-[10%] grow-0 w-[90%] p-2 bg-blue-600 dark:bg-blue-800 text-white rounded-[10px] hover:bg-blue-700 dark:hover:bg-blue-900 cursor-pointer"
            />
        </form>
    );
};

export default Input;