import React from "react";
import { useState, useEffect } from "react";
import { WithRouter } from "utils/Navigation";
import axios from "axios";

import Layout from "components/Layout";
import BoxPokemon from "components/BoxPokemon";
import { CgPokemon } from "react-icons/cg";

const PokemonDetail = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const { name_pokemon } = props.params;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name_pokemon}`)

      .then((res) => {
        const { data } = res;
        setData(data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  return (
    <Layout>
      <div className="flex flex-row items-center space-x-10 px-5 py-5 justify-around">
        <div className="flex flex-col space-y-4 text-center bg-slate-700 rounded-lg p-3">
          <img
            className="w-64 h-64"
            alt="Pokemon"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
          />
          <p className="font-semibold text-xl text-white">{data.name}</p>
        </div>
        <div>
          <h2 className="text-sky-400 bg-slate-700 p-1 mb-2 rounded-lg text-lg text-center font-semibold">
            Stat Pokemon
          </h2>
          {data.stats?.map((item) => (
            <BoxPokemon stat={item.stat.name} base_stat={item.base_stat} />
          ))}
          <h2 className="text-sky-400 bg-slate-700 p-1 mb-2 mt-3 rounded-lg text-lg text-center font-semibold">
            Moves
          </h2>
          {data.abilities?.map((item) => (
            <BoxPokemon ability={item.ability.name} />
          ))}
          <h2 className="text-sky-400 bg-slate-700 p-1 mb-2 mt-3 rounded-lg text-lg text-center font-semibold">
            Type Pokemon
          </h2>
          {data.types?.map((item) => (
            <BoxPokemon type={item.type.name} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => props.navigate(`/pokemon/catch/${data.name}`)}
          className="ml-3 flex text-white text-sm font-medium  bg-sky-500 p-3 rounded-lg"
        >
          <CgPokemon className="text-xl mr-1" />
          Catch Pokemon
        </button>
      </div>
    </Layout>
  );
};

export default WithRouter(PokemonDetail);
