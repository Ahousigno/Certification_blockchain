import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Certificate from "./pages/Certificate";
import Connexion from "./pages/Connection";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/a-propos" exact element={<About />} />
        <Route path="/certification" exact element={<Certificate />} />
        <Route path="/connexion" exact element={<Connexion />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
