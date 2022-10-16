import React from "react";
import { useState, useEffect } from "react";

const Card = (props) => {
  const [pokemonIndex, setPokemonIndex] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setPokemon();
  }, []);

  const setPokemon = () => {
    const { name, url } = props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];

    setPokemonIndex(pokemonIndex);
    setName(name);
  };

  return (
    <div>
      <div className="mx-2 border-2 w-56 rounded-2xl shadow-lg">
        <div className="text-center flex flex-col justify-center h-full">
          <img
            onClick={props.onNavigate}
            alt=""
            className="w-full h-32"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonIndex}.svg`}
          />
          <div
            onClick={props.onNavigate}
            className="text-xs text-white text-center font-bold tracking-widest bg-sky-800 rounded-b-lg dark:rounded-b-xl py-2"
          >
            {props.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
