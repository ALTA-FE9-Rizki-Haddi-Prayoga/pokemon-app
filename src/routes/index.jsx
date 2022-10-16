import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/Index";
import PokemonDetail from "pages/PokemonDetail";
import MyPokemon from "pages/MyPokemon";
import CatchPokemon from "pages/CatchPokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name_pokemon" element={<PokemonDetail />} />
        <Route path="/pokemon/catch/:name_pokemon" element={<CatchPokemon />} />
        <Route path="/mypokemon" element={<MyPokemon />} />
        <Route path="*" element={<div>404 Error Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;