import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout.jsx";
import Input from "./components/Input.jsx";
import Screen from "./components/Screen.jsx";
import { mode } from "./themeSlice.js";

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
      </Layout>
  );
};

export default App;
