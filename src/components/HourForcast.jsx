import React, { useState } from "react";
import dropDown from "../assets/images/icon-dropdown.svg";
import HourlyDataForcast from "./HourlyDataForcast";

const HourForcast = ({
  hourforcasts: { time, weathercode, apparent_temperature },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [day, setDay] = useState(
    new Date().toLocaleDateString("en-US", { weekday: "long" }),
  );
  const timeZone = time
    ? time.filter((zone) => {
        const dayTime = new Date(zone).toLocaleDateString("en-US", {
          weekday: "long",
        });
        if (String(dayTime).toLowerCase() === String(day).toLowerCase())
          return zone;
      })
    : null;
  const codes = [];

  if (timeZone) {
    for (let zone of timeZone) {
      for (let i = 0; i < time.length; i++) {
        if (zone === time[i]) {
          codes.push(i);
        }
      }
    }
  }
  console.log(codes);

  const weatherCodes = [];
  const temperatures = [];

  if (codes.length > 0) {
    for (let code of codes) {
      weatherCodes.push(weathercode[code]);
      temperatures.push(apparent_temperature[code]);
    }
  }
  console.log(weatherCodes);
  console.log(temperatures);

  function handleUnitClick(evt) {
    evt.target.classList.toggle("rotate-180");
  }

  return (
    <div className="md:mt-4 md:justify-self-center md:self-start flex-0 relative md:w-full md:row-start-2 md:row-end-5 md:col-start-3 md:col-end-4 rounded-[20px] text-black dark:text-white flex flex-col w-[90%] items-center p-2 justify-start bg-gray-500 dark:bg-gray-700 mb-4 md:h-[180vh]">
      <div className="flex justify-between items-center w-full mb-2">
        <h2 className="text-xl p-2 font-bold bg-linear-to-r from-orange-500 to-green-500 bg-clip-text text-transparent dark:text-white">
          Hourly Forcast
        </h2>
        <button className="text-white bg-gray-600 dark:bg-gray-800 flex justify-between items-center p-2 max-[400px]:p-1 gap-2 max-[400px]:text-sm max-[400px]:gap-4">
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
      <div className="md:overflow-y-auto max-[400px]:h-150 w-[95%] flex flex-col items-start justify-between gap-2 p-4 overflow-y-auto grow-0 max-[400px]:p-2">
        {timeZone ? (
          timeZone.map((cast, index) => {
            return (
              <HourlyDataForcast
                key={index}
                hourlies={[cast, weatherCodes[index], temperatures[index]]}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {isOpen && (
        <div className="shadow-[0px_0px_5px_0px] absolute border rounded-xl top-[3%] max-[400px]:top-[10%] md:top-[6%] right-2 flex flex-col gap-2 p-2 w-[60%] h-max bg-gray-600 dark:bg-gray-800">
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
              className="shadow md:hover:shadow-[0px_0px_2px_1px] md:active:shadow-none hover:cursor-pointer active:shadow-[0px_0px_1px_1px] w-full text-white hover:bg-gray-900 p-2 rounded-xl font-bold bg-linear-to-r from-orange-500 to-green-500 dark:bg-none"
              onClick={(evt) => {
                setDay(evt.target.innerText);
              }}
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
