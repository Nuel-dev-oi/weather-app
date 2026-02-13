import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Screen = () => {
  const regionRef = useRef(null);
  const weatherRef = useRef(null);  
  const tempRef = useRef(null);
  const weather = useSelector((state) => state.weather.data);
  const [currentWeather, setCurrentWeather] = useState(null);
  useEffect(() => {
      console.log("Weather data in Screen component:", weather);
      const handleWeatherData = () => {
        if (weather) {
          setCurrentWeather(weather.current_weather || null);
        }
      }
      handleWeatherData();
  }, [weather]);  

  return (
    <div className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 border-2 md:border-none border-blue-300 dark:border-gray-950 bg-sm-screen-img md:bg-md-screen-img rounded-[2.5rem] md:rounded-[20px] mt-4 mb-4 bg-no-repeat bg-position-[0%_0%] bg-cover w-[90%] md:w-full h-120 md:h-100 flex justify-around items-center">
      <div ref={regionRef} className="border-5 h-25 w-25"></div>
      <div ref={weatherRef} className="border-5 h-25 w-25"></div>
      <div ref={tempRef} className="border-5 h-25 w-25">
        {
        currentWeather ? `${currentWeather.temperature}°C` : "Loading..."
        }
      </div>
    </div>
  );
};

export default Screen;
