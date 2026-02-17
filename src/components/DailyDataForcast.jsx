import React from "react";
import {
  getTempImage,
  weatherMap,
  mapTempImage,
} from "../scripts/weatherMap.js";

const DailyDataForcast = ({
  dailies: [
    cast,
    weathercode,
    apparent_temperature_max,
    apparent_temperature_min,
  ],
}) => {
  //console.log(weathercode);
  let timeZone = cast ? new Date(cast) : null;
  timeZone = timeZone
    ? timeZone.toLocaleDateString("en-US", {
        weekday: "long",
      })
    : null;

  return (
    <div className="font-bold flex flex-col shrink shadow-[0_1px_5px_0px] shadow-blue-400 dark:shadow-white dark:shadow-[0_1px_5px_0px] bg-gray-500 dark:bg-gray-700 w-[calc(100%/3.36)] md:w-[calc(100%/3.36)] h-45 lg:h-full p-4 max-[400px]:p-2 dark:border-black rounded-[20px] max-[400px]:text-sm  text-black dark:text-white">
      <div className="max-[400px]:font-extrabold max-[400px]:text-[12px] h-[20%] text-center bg-linear-to-r from-orange-500 to-green-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
        {timeZone}
      </div>
      <img
        src={mapTempImage(getTempImage(Number(weathercode)), weatherMap)}
        alt="weather Image"
        className="shrink h-[60%] w-full object-contain"
      />
      <div className="max-[400px]:text-[12px] text-[15px] gap-2 h-[20%] flex justify-between w-full bg-linear-to-r from-orange-500 to-green-500 bg-clip-text text-transparent dark:text-white dark:bg-none">
        <span>{apparent_temperature_max}°</span>
        <span>{apparent_temperature_min}°</span>
      </div>
    </div>
  );
};

export default DailyDataForcast;
