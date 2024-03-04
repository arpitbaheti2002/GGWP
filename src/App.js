import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Applications from "./components/Applications/Applications";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Application" element={<Applications />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
