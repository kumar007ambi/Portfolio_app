import React from "react";
import { Header } from "../src/components/Header/Header";
import { Main } from "../src/components/Main/Main";
import { Footer } from "../src/components/Footer/Footer";
import { GlobalStyle } from "../src/components/styles/global";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
