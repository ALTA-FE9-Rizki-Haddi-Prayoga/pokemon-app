import React from "react";
import { WithRouter } from "../utils/Navigation";

import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import CardPokemon from "../components/CardPokemon";

const Index = () => {
  return (
    <>
      <main className="flex justify-center bg-slate-400">
        <div className="w-full md:w-1/2 h-screen bg-slate-800">
          <Navbar />
          <h2 className="text-white m-3 text-lg font-medium">Pokemon List</h2>
          <div>
            <CardPokemon />
          </div>
          <BottomNav className="sticky bottom-0" />
        </div>
      </main>
    </>
  );
};

export default WithRouter(Index);
