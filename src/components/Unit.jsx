import React, { useState, useEffect } from "react";
import unitLogo from "../assets/images/icon-units.svg";
import dropDown from "../assets/images/icon-dropdown.svg";

const Unit = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleUnitClick(evt) {
    evt.target.classList.toggle("rotate-180");
  }

  useEffect(() => {
    //console.log("Unit dropdown is open:", isOpen);
  }, [isOpen]);

  return (
    <button className=" p-2 w-max flex gap-3 rounded bg-gray-500 dark:bg-gray-700 items-center dark:text-gray-50 text-gray-50">
      <img
        src={unitLogo}
        alt="Unit Logo"
        className="w-4 lg:w-6 h-6 max-[400px]:w-4 max-[400px]:-translate-x-1"
      />
      <span className="max-[400px]:text-[12px] text-sm dark:text-white text-gray-800 max-[400px]:-translate-x-1">
        Units
      </span>
      <img
        src={dropDown}
        alt="Dropdown Icon"
        className="w-4 lg:w-4 h-4 transition-transform duration-300 max-sm:w-4 max-[400px]:-translate-x-1.5"
        onClick={(evt) => {
          setIsOpen(!isOpen);
          handleUnitClick(evt);
        }}
      />
    </button>
  );
};

export default Unit;
