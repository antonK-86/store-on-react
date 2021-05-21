import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "./components/container/Container";
import Main from "./components/main/Main";
import NavBar from "./components/navbar/NavBar";
import AppRouter from "./components/router/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Main>
        <Container>
          <AppRouter />
        </Container>
      </Main>
    </BrowserRouter>
  );
};

export default App;
