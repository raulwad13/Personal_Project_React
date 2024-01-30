import React from "react";
import GlobalMap from "./GlobalMap/GlobalMap";
import BiomaDetails from "./BiomaDetails/BiomaDetails";

const Main = () => {
  return (
    <>
      <main>
        <BiomaDetails/>
        <GlobalMap />
      </main>
    </>
  );
};

export default Main;
