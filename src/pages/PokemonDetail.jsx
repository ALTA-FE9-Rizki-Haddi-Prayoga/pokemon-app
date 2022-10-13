import React from "react";
import { WithRouter } from "../utils/Navigation";

import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";

import Pokemon from "../assets/pokemon.png"

const PokemonDetail = () => {
  return (
    <main className="flex justify-center bg-slate-400 overflow-auto">
      <div className="w-full md:w-1/2 h-screen bg-slate-800 overflow-auto">
        <Navbar />
        <h2 className="text-white m-3 text-lg font-medium">Pokemon Detail</h2>
        <div>
          <section className="flex border m-3 xl:w-[690px] lg:w-[480px] md:w-[360px] sm:w-12 p-4 rounded-lg">
            <img className="rounded" src={Pokemon} alt="Gambar Pokemon" />
            <div className="grid mt-4 ml-4 grid-flow-row auto-rows-max gap-2">
              <h2 className="text-white">Name : Pikachu</h2>
              <p className="text-white">Weight : 130</p>
              <p className="text-white">Height : 130</p>
            </div>
          </section>
          <section className="border m-3 xl:w-[690px] lg:w-[480px] md:w-[360px] sm:w-12 p-4 rounded-lg">
            <div className="grid grid-flow-row auto-rows-max gap-2">
              <h2 className="text-sky-400 text-lg text-center font-semibold">Stat Pokemon</h2>
              <p className="text-green-400 font-medium text-base">HP : 70</p>
              <p className="text-orange-400 font-medium text-base">Attack : 40</p>
              <p className="text-green-600 font-medium text-base">Defense : 60</p>
              <p className="text-sky-500 font-medium text-base">Speed : 42</p>
            </div>
          </section>
          <section className="border m-3 xl:w-[690px] lg:w-[480px] md:w-[360px] sm:w-12 p-4 rounded-lg">
            <div className="grid grid-flow-row auto-rows-max gap-2">
              <h2 className="text-sky-400 text-lg text-center font-semibold">Moves Pokemon</h2>
              <p className="text-white text-base">Wind Move</p>
            </div>
          </section>
        </div>
        <BottomNav className="sticky bottom-0" />
      </div>
    </main>
  );
};

export default WithRouter(PokemonDetail);
