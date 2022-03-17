import React from "react";
import FontContainer from "./components/FontContainer";
import { FontContextProvider } from "./utils/FontContexts";

const App = () => {
  return (
    <FontContextProvider>
      <FontContainer />
    </FontContextProvider>
  );
};

export default App