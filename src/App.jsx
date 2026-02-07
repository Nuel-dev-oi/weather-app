import React from "react";
import Layout from "./components/Layout.jsx";
import Input from "./components/Input.jsx";
import Screen from "./components/Screen.jsx";

const App = () => {
  
  return (
    <>
      <Layout>
        {/* Other components go here */}
        <Input />
        <Screen />
      </Layout>
    </>
  );
};

export default App;
