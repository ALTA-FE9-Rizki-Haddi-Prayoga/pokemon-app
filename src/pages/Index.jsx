import React, { useState, useEffect } from "react";
import { WithRouter } from "utils/Navigation";
import axios from "axios";

import Layout from "components/Layout";
import CardPokemon from "components/CardPokemon";

const Index = (props) => {
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(21);
  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handlePokemon();
  }, []);

  const handlePokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${limit}&limit=${page}`)
      .then((res) => {
        const { results } = res.data;
        const newPage = page + 9;
        const newLimit = page - 9;
        const temp = [...datas];
        temp.push(...results);
        setDatas(temp);
        setPage(newPage);
        setLimit(newLimit);
      })
      .catch((err) => {
        alert.apply(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-3 px-3 py-2">
        {datas.map((data) => (
          <CardPokemon
            key={data.id}
            name={data.name}
            url={data.url}
            onNavigate={() => props.navigate(`/pokemon/${data.name}`)}
          />
        ))}
      </div>
      <div className="text-end">
        <button
          onClick={() => handlePokemon()}
          className="mr-2 mt-4 py-2 px-6 rounded-lg bg-sky-500"
        >
          <span className="text-white font-medium">Load More Pokemon</span>
        </button>
      </div>
    </Layout>
  );
};

export default WithRouter(Index);
