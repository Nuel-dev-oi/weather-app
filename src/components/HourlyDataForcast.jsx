import React from "react";
import { useSelector } from "react-redux";
import convertImperialUnits from "../scripts/unitConversion.js";
import {
  getTempImage,
  weatherMap,
  mapTempImage,
} from "../scripts/weatherMap.js";

const HourlyDataForcast = ({
  hourlies: [cast, weathercode, apparent_temperature],
}) => {
  const unit = useSelector((state) => state.units.data);
  const [temp] = convertImperialUnits(
    unit["Temperature"],
    unit["Wind Speed"],
    unit["Precipitation"],
  );
  return (
    <div className="border border-white rounded-xl w-full p-2 shadow-[0px_0px_2px_1px] h-20 flex justify-between items-center">
      <div className="whitespace-nowrap w-[25%] h-[60%] flex justify-center items-center bg-linear-to-r from-orange-500 to-green-500 bg-clip-text text-transparent dark:text-white font-bold">
        {new Date(cast).toLocaleTimeString([], {
          hour: "numeric",
          hour12: true,
        })}
      </div>
      <img
        src={mapTempImage(getTempImage(Number(weathercode)), weatherMap)}
        alt="weather Image"
        className="shrink h-[60%] w-[50%] object-contain"
      />
      <div className="w-[25%] h-[60%] flex justify-center items-center bg-linear-to-r from-orange-500 to-green-500 bg-clip-text text-transparent dark:text-white font-bold">
        {unit["Temperature"] === "Celcius (°C)"
          ? `${apparent_temperature}`
          : `${Number(temp(apparent_temperature)).toFixed(1)}`}
        °
      </div>
    </div>
  );
};

export default HourlyDataForcast;
