import React from "react";

const DailyForecast = ({ dailycasts }) => {
  return (
    <div className="md:col-start-2 md:col-end-3 md:row-start-4 md:row-end-5 h-full flex flex-col items-center mb-4 whitespace-nowrap bg-linear-to-r from-orange-500 to-green-500 bg-clip-text text-transparent dark:text-white">
      <h2 className="text-left p-2 w-full font-bold">Daily forcast</h2>
      <div className=" overflow-x-auto shrink mb-4 w-[90%] md:w-full h-max md:h-full p-3 flex flex-wrap md:flex-nowrap gap-4 md:gap-4 justify-between md:justify-between items-center md:items-center bg-transparent ">
        {dailycasts.map((dailycast, index) => (
          <div
            key={index}
            className="shrink shadow-[0_1px_5px_0px] shadow-blue-400 dark:shadow-white dark:shadow-[0_1px_5px_0px] bg-gray-500 dark:bg-gray-700 w-[calc(100%/3.36)] md:w-[calc(100%/3.36)] h-45 lg:h-full p-4 dark:border-black rounded-[20px] max-[400px]:text-sm max-[400px]:p-2 text-black dark:text-white"
          >
            {dailycast}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
