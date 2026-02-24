import React, { useState, useEffect } from "react";
import unitLogo from "../assets/images/icon-units.svg";
import dropDown from "../assets/images/icon-dropdown.svg";
import checkMark from "../assets/images/icon-checkmark.svg";
import { useDispatch } from "react-redux";
import { selectUnit } from "../unitSlice";

const Unit = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({
    Temperature: "Celcius (°C)",
    "Wind Speed": "km/h",
    Precipitation: "Millimeters (mm)",
  });

  function handleSelectUnit(category, value) {
    setSelected((prev) => ({
      ...prev,
      [category]: value,
    }));
  }

  function handleUnitClick(evt) {
    evt.target.classList.toggle("rotate-180");
  }

  useEffect(() => {
    dispatch(selectUnit(selected));
  }, [selected, dispatch]);

  return (
    <div className="relative h-max">
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
      <div
        className={`shadow-[0px_0px_2px_1px] shadow-blue-900 dark:shadow-zinc-200 absolute top-13 right-0 max-[400px]:top-13 w-50 overflow-hidden bg-gray-600 dark:bg-gray-800 rounded-xl transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 p-4 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <h2 className="whitespace-nowrap font-bold bg-linear-to-r from-orange-500 to-green-500 bg-clip-text text-transparent dark:text-white">
          Switch to Imperial
        </h2>
        {[
          ["Temperature", ["Celcius (°C)", "Fahrenheit (°F)"]],
          ["Wind Speed", ["km/h", "mph"]],
          ["Precipitation", ["Millimeters (mm)", "Centimeters (cm)"]],
        ].map((unit, index) => {
          return (
            <div
              key={index}
              className="units text-white shadow-[0px_0px_5px_1px] nth-[2]:mt-2 p-2 whitespace-nowrap"
            >
              <h3 className="font-bold mb-2">{unit[0]}</h3>
              {unit[1].map((temp, index) => (
                <div key={index}>
                  <div
                    className="hover:shadow-[0px_0px_2px_1px] rounded flex gap-4 w-full justify-between cursor-pointer text-black dark:text-white active:bg-black active:text-white"
                    onClick={() => {
                      handleSelectUnit(unit[0], temp);
                    }}
                  >
                    {temp}
                    {selected[unit[0]] === temp && (
                      <img src={checkMark} alt="check Mark" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Unit;
