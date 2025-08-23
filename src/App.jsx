import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CardNav from "./components/CardNav";


const App = () => {
  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">
      <CardNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
