import React, { useState, useContext } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { ChakraProvider } from "@chakra-ui/react";
import { BiomaContext } from "./context/BiomaContext";

function App() {
  const [bioma, setBioma] = useState("");
  const updateBioma = (newBioma) => {
    setBioma(newBioma);
  };
  const biomaData = {
    bioma,
    updateBioma,
  };
  return (
    <>
      <section>
        <BiomaContext.Provider value={biomaData}>
            <Header />
            <Main />
            <Footer />
        </BiomaContext.Provider>
      </section>
    </>
  );
}

export default App;
