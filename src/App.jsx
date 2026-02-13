import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout.jsx";
import Input from "./components/Input.jsx";
import Screen from "./components/Screen.jsx";
import Forecast from "./components/Forecast.jsx";
import { mode } from "./themeSlice.js";
import DailyForecast from "./components/DailyForcast.jsx";
import HourForcast from "./components/HourForcast.jsx";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const userTheme = JSON.parse(localStorage.getItem("theme"));

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
        forecasts={["Forecast 1", "Forecast 2", "Forecast 3", "Forecast 4"]}
      />
      <DailyForecast
        dailycasts={[
          "dailycast 1",
          "dailycast 2",
          "dailycast 3",
          "dailycast 4",
          "dailycast 5",
          "dailycast 6",
          "dailycast 7",
        ]}
      />
      <HourForcast hourforcasts={[
          "hourcast 1",
          "hourcast 2",
          "hourcast 3",
          "hourcast 4",
          "hourcast 5",
          "hourcast 6",
          "hourcast 7",
          "hourcast 8"
      ]}
      />
    </Layout>
  );
};

export default App;
