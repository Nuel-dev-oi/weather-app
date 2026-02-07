import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mode } from "../themeSlice";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme);
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <button
      className="shadow-lg shadow-blue-900 dark:shadow-zinc-200  p-2 bg-blue-900 rounded h-max dark:bg-green-400 dark:text-blue-900 text-black outline-0 active:outline-1 "
      onClick={() => dispatch(mode())}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeButton;
