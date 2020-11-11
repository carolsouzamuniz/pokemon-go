import "./App.css";
import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import styled from "styled-components";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  background-color: #F8F8FF;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <Routes />
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
