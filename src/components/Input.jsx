import React, { useState, useEffect, useRef } from "react";
import searchIcon from "../assets/images/icon-search.svg";
import axios from "axios";
import { useDispatch } from "react-redux";  
import { weatherData } from "../weatherSlice";

const Input = () => {
  const ref = useRef(null);
  const searchRef = useRef(null); 
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleChange = (evt) => {
    const value = evt.target.value;
    setSearchQuery(value);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const api = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,apparent_temperature,relativehumidity_2m,precipitation,windspeed_10m,weathercode&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max,windspeed_10m_min,weathercode&timezone=auto

`;
    const currentRef = ref.current; 
    const searchInput = searchRef.current; 
    //fetch data from api using searchQuery

    async function fetchData() {
      try {
        const response = await axios.get(api);
        dispatch(weatherData(response.data));
        // Process the response data as needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const handleSubmit = (evt) => {
      if (!currentRef) return;
      evt.preventDefault();
      console.log("Form submitted with query:", searchQuery);
      // Perform search action here
      fetchData(); // Call the function to fetch data from the API
      searchInput.value = ""; // Clear the input field after submission
      setSearchQuery(""); // Clear the search query state
    };
    currentRef.addEventListener("submit", handleSubmit);

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("submit", handleSubmit);
      }
    };
  }, [ searchQuery, dispatch ]);

  return (
    <form ref={ref} className="md:col-start-1 md:col-end-2 md:row-start-1 md: flex flex-col h-max w-screen p-4 md:justify-center justify-between items-center gap-2 md:flex-row md:gap-2">
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
          onChange={(evt) => handleChange(evt)}
          ref={searchRef}
        />
      </div>
      <input
        type="submit"
        value="Search"
        className="md:h-12 md:w-[10%] grow-0 w-[90%] p-2 bg-blue-600 dark:bg-blue-800 text-white rounded-[10px] hover:bg-blue-700 dark:hover:bg-blue-900 cursor-pointer"
      />
    </form>
  );
};

export default Input;
