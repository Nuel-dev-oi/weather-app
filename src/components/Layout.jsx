import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
  return (
    <div className="h-max w-max dark:bg-blue-950 bg-amber-50 flex flex-col items-start">
      <Header />
      <main className="flex flex-col items-center md:grid md:grid-cols-[5%_65%_25%_5%] md:grid-rows-[0.3fr_1fr_0.6fr_0.8fr] w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
