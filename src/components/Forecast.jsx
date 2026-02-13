import React from "react";

const Forecast = ({ forecasts }) => {
  return (
    <div className="mb-4 md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4 w-[90%] md:w-full h-max p-3 flex flex-wrap md:flex-nowrap gap-4 md:gap-4 justify-center md:justify-between items-center md:items-center bg-transparent text-black dark:text-white">
      {forecasts.map((forecast, index) => (
        <div
          key={index}
          className="shrink shadow-[0_1px_5px_0px] shadow-blue-400 dark:shadow-white dark:shadow-[0_1px_5px_0px] bg-gray-500 dark:bg-gray-700 w-[calc(100%/2.15)] md:w-[calc(100%/3.5)] h-30 p-4 dark:border-black rounded-[20px] max-[400px]:text-sm"
        >
          {forecast}
        </div>
      ))}
    </div>
  );
};

export default Forecast;
