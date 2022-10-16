import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { WithRouter } from "utils/Navigation";
import axios from "axios";

import Layout from "components/Layout";

const CatchPokemon = (props) => {
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

  const promise = new Promise((resolve, reject) => {
    let pokemonRate = Math.floor(Math.random() * 100);
    setTimeout(() => {
      if (pokemonRate >= 50) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });

  const handleCatch = (num) => {
    promise
      .then((res) => {
        alert("Yeayyy, You Catch Pokemon");
      })
      .catch((err) => {
        alert("You Missed!");
      })
      .finally(() => {
        console.log("Done!");
      });
  };

  const handleClickCatch = () => {
    handleCatch();
  };

  return (
    <Layout>
      <div className="flex flex-row items-center space-x-10 px-5 py-5 justify-around">
        <div className="flex flex-col space-y-4 text-center p-3">
          <p className="font-bold text-xl text-white">
            Catch the <span className="text-sky-400">{data.name}!</span>
          </p>
          <img
            className="w-72 h-72"
            alt="Pokemon"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
          />
        </div>
      </div>
      <div className="flex flex-row justify-around mb-20">
        <div
          onClick={() => handleClickCatch()}
          className="px-4 py-2 rounded-lg bg-sky-400 text-white font-semibold text-lg hover:bg-sky-600 text-center "
        >
          Catch!
        </div>
        <Link to="/">
          <div className="px-4 py-2 rounded-lg bg-sky-400 text-white font-semibold text-lg hover:bg-sky-600 text-center">
            Run
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default WithRouter(CatchPokemon);
