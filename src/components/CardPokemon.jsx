import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import Pokemon from "../assets/pokemon.png"

const CardPokemon = () => {
  return (
    <div className="ml-3 border-2 w-56 rounded-2xl shadow-lg">
      <div className="flex justify-end"> 
        <AiOutlineClose
          className="w-8 h-6 mt-1 text-white justify-items-end"
        />
      </div>
      <Link to={`/pokemon`}>
        <a href="#kosong">
          <div className="flex justify-center">
            <img src={Pokemon} alt="Gambar"/>
          </div>
          <p className="font-arcade text-xs text-white text-center font-bold tracking-widest bg-sky-800 rounded-b-lg dark:rounded-b-xl py-2">
            Pikachu
          </p>
        </a>
      </Link>
    </div>
  );
};

export default CardPokemon;
