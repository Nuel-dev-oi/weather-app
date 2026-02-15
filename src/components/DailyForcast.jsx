import React from "react";
import DailyDataForcast from "./DailyDataForcast.jsx";

const DailyForecast = ({
  dailycasts: {
    time,
    weathercode,
    apparent_temperature_max,
    apparent_temperature_min,
  },
}) => {
  console.log(
    time,
    weathercode,
    apparent_temperature_max,
    apparent_temperature_min,
  );
  return (
    <div className="md:col-start-2 md:col-end-3 md:row-start-4 md:row-end-5 h-full flex flex-col items-center mb-4 whitespace-nowrap bg-linear-to-r from-orange-500 to-green-500 bg-clip-text text-transparent dark:text-white">
      <h2 className="text-left p-2 w-full font-bold">Daily forcast</h2>
      <div className=" overflow-x-auto shrink mb-4 w-[90%] md:w-full h-max md:h-full p-3 flex flex-wrap md:flex-nowrap gap-4 md:gap-4 justify-between md:justify-between items-center md:items-center bg-transparent ">
        {time ? (
          time.map((cast, index) => (
            <DailyDataForcast
              key={index}
              dailies={[
                cast,
                weathercode[index],
                apparent_temperature_max[index],
                apparent_temperature_min[index],
              ]}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default DailyForecast;
