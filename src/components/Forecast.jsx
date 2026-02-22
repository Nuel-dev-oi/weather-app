import React from "react";
import Spinner from "./Spinner.jsx";

const Forecast = ({ forecasts }) => {
  return (
    <div className="overflow-x-auto mb-4 md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4 w-[90%] md:w-full h-max p-3 flex flex-wrap md:flex-nowrap gap-4 md:gap-4 justify-center md:justify-between items-center md:items-center bg-transparent text-black dark:text-white">
      {forecasts.map((forecast, index) => (
        <div
          key={index}
          className="shrink flex flex-col shadow-[0_1px_5px_0px] shadow-blue-400 dark:shadow-white dark:shadow-[0_1px_5px_0px] bg-gray-500 dark:bg-gray-700 w-[calc(100%/2.15)] md:w-[calc(100%/3.5)] h-30 p-4 dark:border-black rounded-[20px] max-[400px]:text-sm"
        >
          <h2 className="text-sm font-medium h-max p-2">{forecast[0]}</h2>
          {!/null/.test(forecast[1]) ? (
            <p className="h-[80%] p-2 flex justify-center items-center max-[400px]:text-2xl text-3xl font-semibold whitespace-nowrap bg-linear-to-r from-orange-500 to-green-500 bg-clip-text text-transparent dark:text-white">
              {forecast[1]}
            </p>
          ) : (
            <Spinner size="sm"/>
          )}
        </div>
      ))}
    </div>
  );
};

export default Forecast;
