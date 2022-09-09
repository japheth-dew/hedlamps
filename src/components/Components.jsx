import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Homepage from "./Hompage/Homepage";

const Components = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default Components;
