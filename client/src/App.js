import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import AppRouter from "./components/router/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter/>
    </BrowserRouter>
  );
};

export default App;
