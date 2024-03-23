import React from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./Pages/Posts";
import OnePage from "./Pages/OnePage";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar"></div>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<OnePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
