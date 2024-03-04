import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Applications from "./components/Applications/Applications";
import Admin from "./components/Admin/Admin";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Application" element={<Applications />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
