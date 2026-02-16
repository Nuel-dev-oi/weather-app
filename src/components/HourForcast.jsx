import React, { useState, useEffect } from "react";
import dropDown from "../assets/images/icon-dropdown.svg";

const HourForcast = ({ hourforcasts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [day, setDay] = useState("Monday");

  function handleUnitClick(evt) {
    evt.target.classList.toggle("rotate-180");
  }

  useEffect(() => {
    console.log("Unit dropdown is open:", isOpen);
  }, [isOpen]);

  return (
    <div className="relative md:w-full md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-5 rounded-[20px] text-black dark:text-white flex flex-col w-[90%] items-center p-2 justify-start bg-gray-500 dark:bg-gray-700 mb-4 md:h-[95%]">
      <div className="flex justify-between items-center w-full mb-2">
        <h2 className="text-xl p-2 font-bold bg-linear-to-r from-orange-500 to-green-500 bg-clip-text text-transparent dark:text-white">
          Hourly Forcast
        </h2>
        <button className="bg-gray-600 dark:bg-gray-800 flex justify-between items-center p-2 max-[400px]:p-1 gap-2 max-[400px]:text-sm max-[400px]:gap-4">
          <span>{day}</span>
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
      </div>
      <div className="h-full w-[95%] flex flex-col items-start justify-between gap-2 p-4 overflow-y-auto grow-0 max-[400px]:p-2">
        {hourforcasts.map((hourforcast, index) => (
          <div
            key={index}
            className="border border-white rounded-xl w-full p-2 shadow-[0px_0px_2px_1px] h-20"
          >
            {hourforcast}
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="shadow-[0px_0px_5px_0px] absolute border rounded-xl top-[7%] md:top-[6%] right-2 flex flex-col gap-2 p-2 w-[60%] h-max bg-gray-600 dark:bg-gray-800">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((Weekday, index) => (
            <div
              key={index}
              className="shadow md:hover:shadow-[0px_0px_2px_1px] md:active:shadow-none hover:cursor-pointer active:shadow-[0px_0px_1px_1px] w-full hover:bg-gray-900 p-2 rounded-xl font-bold"
              onClick={(evt) => setDay(evt.target.innerText)}
            >
              {Weekday}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HourForcast;
