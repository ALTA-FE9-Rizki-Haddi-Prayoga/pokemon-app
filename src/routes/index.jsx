import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "../pages/Index";
import Pokemon from "../pages/Pokemon";
import MyPokemon from "../pages/MyPokemon";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/mypokemon" element={<MyPokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
