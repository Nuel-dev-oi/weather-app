import React, { useState, useRef, useEffect, useCallback } from "react";
import searchIcon from "../assets/images/icon-search.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { weatherData } from "../weatherSlice";

// Simple spinner component
const Spinner = () => (
  <div className="flex justify-center items-center">
    <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Input = () => {
  const searchRef = useRef(null);
  const submitRef = useRef(null);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("Lagos");
  const [error, setError] = useState(null);
  const [count, setCount] = useState(30);
  const [retryTrigger, setRetryTrigger] = useState(0);
  const [loading, setLoading] = useState(false); // loading state

  // Handle input change
  const handleChange = (evt) => setSearchQuery(evt.target.value);

  // Fetch forecast
  const fetchForecast = useCallback(async () => {
    setLoading(true); // start loading
    try {
      const geocodingApi = `https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}&count=1`;
      const geoRes = await axios.get(geocodingApi);

      if (!geoRes.data.results?.length) throw new Error("Location not found");

      const { latitude, longitude } = geoRes.data.results[0];

      const weatherApi = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,apparent_temperature,relativehumidity_2m,precipitation,windspeed_10m,weathercode&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max,windspeed_10m_min,weathercode&timezone=auto`;

      const weatherRes = await axios.get(weatherApi);

      dispatch(weatherData(weatherRes.data));
      setError(null); //clear error on success
    } catch (err) {
      setError(err.message);
      setCount(30); // reset countdown
    } finally {
      setLoading(false); // stop loading
    }
  }, [searchQuery, dispatch]);

  // Initial fetch and retries triggered by retryTrigger
  useEffect(() => {
    fetchForecast();
  }, [retryTrigger, fetchForecast]);

  // Countdown retry effect
  useEffect(() => {
    if (!error) return; // No countdown if no error

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setRetryTrigger((prev) => prev + 1); // Trigger retry
          return 30; // Reset countdown
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [error]);

  // Initialize search input value
  useEffect(() => {
    if (searchRef.current && !searchRef.current.value) {
      searchRef.current.value = "Lagos";
    }
  }, []);

  // Manual search submit
  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchForecast();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="md:col-start-1 md:col-end-2 md:row-start-1 flex flex-col h-max w-screen p-4 md:justify-center justify-between items-center gap-2 md:flex-row md:gap-2"
      >
        <div className="md:grow-0 grow w-[90%] flex mt-2 md:mt-0 md:h-12 h-10 md:justify-center justify-start gap-0 md:w-[50%]">
          <img
            src={searchIcon}
            alt="Search Icon"
            className="rounded-[10px_0px_0px_10px] w-15 h-full p-2 pl-8 bg-gray-500 dark:bg-gray-700"
          />
          <input
            type="search"
            placeholder="Search for a place..."
            className="dark:placeholder:text-white grow p-2 rounded-[0px_10px_10px_0px] border-gray-300 dark:border-gray-600 bg-gray-500 dark:bg-gray-700 text-black dark:text-white outline-0 focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            ref={searchRef}
          />
        </div>
        <input
          ref={submitRef}
          type="submit"
          value="Search"
          className="shadow-[0px_2px_5px_0px] active:shadow-[0px_0px_0px_0px] shadow-blue-600 md:h-12 md:w-[10%] grow-0 w-[90%] p-2 bg-blue-600 dark:bg-blue-800 text-white rounded-[10px] hover:bg-blue-700 dark:hover:bg-blue-900 cursor-pointer"
        />
      </form>

      {/* Spinner */}
      {loading && <Spinner />}

      {/* Error and countdown */}
      {error && !loading && (
        <div className="text-black dark:text-white font-bold mt-2">
          {error}
          <p>Retrying in {count}s...</p>
        </div>
      )}
    </>
  );
};

export default Input;
