import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen dark:bg-blue-950 bg-amber-50 flex flex-col items-start">
      <Header />
      <main className="flex flex-col items-center md:grid w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
