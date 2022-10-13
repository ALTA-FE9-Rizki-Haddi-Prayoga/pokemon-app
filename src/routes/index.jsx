import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "../pages/Index";
import PokemonDetail from "../pages/PokemonDetail";
import MyPokemon from "../pages/MyPokemon";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonDetail />} />
        <Route path="/mypokemon" element={<MyPokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
