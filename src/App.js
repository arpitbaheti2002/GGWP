import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/VITResume" element={<ResumeManager />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
