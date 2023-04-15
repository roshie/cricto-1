import React from "react";
import Home from "./components/Home/Home";
import Upload from "./components/Upload/Upload";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path= "/" element={Home}/>
        <Route path="/upload" element={Upload} />
      </Routes>
    </Router>
  );
}

export default App;
