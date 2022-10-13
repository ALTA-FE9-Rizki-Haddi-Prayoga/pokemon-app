import React from 'react'
import { WithRouter } from "../utils/Navigation";

import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";

const MyPokemon = () => {
  return (
    <>
    <main className="flex justify-center bg-slate-400">
      <div className="w-full md:w-1/2 h-screen bg-slate-800">
        <Navbar />
        <h2 className="text-white m-3 text-lg font-medium">My Pokemon List</h2>
        <div className="ml-3 text-slate-500">
          Pokemon Not Found
        </div>
        <BottomNav className="sticky bottom-0" />
      </div>
    </main>
  </>
  )
}

export default WithRouter(MyPokemon);