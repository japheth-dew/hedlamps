import React from "react";
import Components from "./components/Components";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Components />
      </div>
    </BrowserRouter>
  );
};

export default App;
