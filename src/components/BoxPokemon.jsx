import React from "react";

const BoxPokemon = (props) => {
  return (
    <>
      <div>
        <p className="text-white"> {props.type}</p>
      </div>
      <div className="flex justify-between space-x-10">
        <p className="text-white">{props.stat}</p>
        <p className="text-white">{props.base_stat}</p>
      </div>
      <div>
        <p className="text-white">{props.ability}</p>
      </div>
    </>
  );
};

export default BoxPokemon;
