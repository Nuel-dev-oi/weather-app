import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout.jsx";
import Input from "./components/Input.jsx";
import Screen from "./components/Screen.jsx";
import Forecast from "./components/Forecast.jsx";
import { mode } from "./themeSlice.js";
import DailyForecast from "./components/DailyForcast.jsx";
import HourForcast from "./components/HourForcast.jsx";
import convertImperialUnits from "./scripts/unitConversion.js";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const weather = useSelector((state) => state.weather.data);
  const unit = useSelector((state) => state.units.data);
  const [temp, speed, prep] = convertImperialUnits(
    unit["Temperature"],
    unit["Wind Speed"],
    unit["Precipitation"],
  );
  console.log(temp, speed, prep);

  const daily = weather
    ? weather.daily
    : {
        time: null,
        weathercode: null,
        apparent_temperature_max: null,
        apparent_temperature_min: null,
      };
  const hourly = weather
    ? weather.hourly
    : {
        time: null,
        weathercode: null,
        apparent_temperature: null,
      };
  const userTheme = JSON.parse(localStorage.getItem("theme"));
  const [feelsLike, setFeelsLike] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [precipitation, setPrecipitation] = useState(null);

  useEffect(() => {
    (() => {
      if (weather) {
        const calculatedFeelsLike = Number(
          weather.hourly.apparent_temperature.reduce((a, b) => a + b, 0) /
            weather.hourly.apparent_temperature.length,
        ).toFixed(2);
        setFeelsLike(calculatedFeelsLike);

        const calculatedHumidity = Number(
          weather.hourly.relativehumidity_2m.reduce((a, b) => a + b, 0) /
            weather.hourly.relativehumidity_2m.length,
        ).toFixed(2);
        setHumidity(calculatedHumidity);

        const calculatedPrecipitation = Number(
          weather.hourly.precipitation.reduce((a, b) => a + b, 0),
        ).toFixed(2);
        setPrecipitation(calculatedPrecipitation);
        setWind(weather.current_weather.windspeed);
      }
    })();
  }, [weather]);

  const handlePageReload = useCallback(() => {
    if (userTheme) {
      document.documentElement.classList.add("dark");
      if (!theme) {
        dispatch(mode());
      }
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", JSON.stringify(false));
      if (theme) {
        dispatch(mode());
      }
    }
  }, [theme, userTheme, dispatch]);

  useEffect(() => {
    window.addEventListener("load", handlePageReload);

    return () => {
      window.removeEventListener("load", handlePageReload);
    };
  }, [handlePageReload]);

  return (
    <Layout>
      {/* Other components go here */}
      <Input />
      <Screen />
      <Forecast
        forecasts={[
          [
            "Feels Like",
            `${unit["Temperature"] === "Celcius (°C)" ? `${feelsLike}` : `${temp(feelsLike)}`}` +
              "°",
          ],
          ["Humidity ", humidity + "%"],
          [
            "Wind",
            `${unit["Wind Speed"] === "km/h" ? `${wind + "km/h"}` : `${speed(wind) + "mph"}`}`,
          ],
          [
            "Precipitation",
            `${unit["Precipitation"] === "Millimeters (mm)" ? `${precipitation + "mm"}` : `${speed(precipitation) + "cm"}`}`,
          ],
        ]}
      />
      <DailyForecast dailycasts={daily} />
      <HourForcast hourforcasts={hourly} />
    </Layout>
  );
};

export default App;
