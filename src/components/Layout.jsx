import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
  return (
    <div className="h-max w-screen dark:bg-blue-950 bg-[rgba(200,200,200,0.8)] flex flex-col items-start max-[400px]:text-sm">
      <Header />
      <main className="flex flex-col items-center md:grid md:grid-cols-[5%_65%_25%_5%] md:grid-rows-[0.3fr_1fr_0.6fr_0.8fr] w-full md:gap-x-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
