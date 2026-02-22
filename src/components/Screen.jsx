import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "./Spinner.jsx";
import {
  getTempImage,
  weatherMap,
  mapTempImage,
} from "../scripts/weatherMap.js";
import convertImperialUnits from "../scripts/unitConversion.js";

const Screen = () => {
  const regionRef = useRef(null);
  const weatherRef = useRef(null);
  const tempRef = useRef(null);
  const weather = useSelector((state) => state.weather.data);
  const unit = useSelector((state) => state.units.data);
  const [temp] = convertImperialUnits(
    unit["Temperature"],
    unit["Wind Speed"],
    unit["Precipitation"],
  );
  const [currentWeather, setCurrentWeather] = useState(null);

  const weatherImg = currentWeather
    ? mapTempImage(getTempImage(Number(currentWeather.weathercode)), weatherMap)
    : null;
  let timeZone = currentWeather ? new Date(currentWeather.time) : null;
  timeZone = timeZone
    ? timeZone.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;
  const region = weather ? String(weather.timezone).split("/") : null;

  useEffect(() => {
    const handleWeatherData = () => {
      if (weather) {
        setCurrentWeather(weather.current_weather || null);
      }
    };
    handleWeatherData();
  }, [weather, currentWeather]);

  return (
    <div className="md:justify-self-center md:self-start text-black dark:text-white border-2 flex-col md:flex-row md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 border-blue-300 dark:border-gray-950 bg-sm-screen-img md:bg-md-screen-img rounded-[2.5rem] md:rounded-4xl mt-4 mb-4 bg-no-repeat bg-position-[0%_0%] bg-cover w-[90%] md:w-full h-120 md:h-100 flex justify-center gap-20 md:gap-0 md:justify-around items-center">
      <div
        ref={regionRef}
        className="p-4 h-max md:w-[50%] white-space-nowrap text-center md:text-start flex flex-col gap-2 justify-center"
      >
        <div className="whitespace-nowrap md:w-70 font-bold text-5xl md:text-3xl max-[400px]:text-3xl h-max p-2 bg-linear-to-r from-orange-500 to-green-500 bg-clip-text text-transparent dark:text-white">
          {region ? (
            `${region[0] || "Loading"}, ${region[1].replace(/_/gi, " ") || ""}`
          ) : (
            <Spinner size="md" />
          )}
        </div>
        <p className="text-[14px] font-medium bg-linear-to-r from-orange-500 to-green-500 bg-clip-text text-transparent dark:text-white">
          {timeZone}
        </p>
      </div>
      <div className="p-4 whitespace-nowrap w-full md:w-[50%] flex flex-row items-center justify-center md:justify-between gap-40 max-[400px]:gap-10 md:gap-0">
        <div ref={weatherRef} className="h-25 w-max">
          {weatherImg ? (
            <img
              src={weatherImg}
              alt="Weather Icon"
              className="h-full w-full object-cover"
            />
          ) : (
            <Spinner size="md" />
          )}
        </div>
        <div
          ref={tempRef}
          className="h-25 w-max flex items-center justify-center max-[400px]:text-6xl text-7xl md:text-4xl lg:text-6xl font-bold md:pr-2 bg-linear-to-r from-orange-500 to-green-500 bg-clip-text text-transparent dark:text-white"
        >
          {currentWeather ? (
            unit["Temperature"] === "Celcius (°C)" ? (
              `${currentWeather.temperature}°`
            ) : (
              `${Number(temp(currentWeather.temperature)).toFixed(1)}°`
            )
          ) : (
            <Spinner size="lg" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Screen;
