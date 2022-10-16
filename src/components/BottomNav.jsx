import React from "react";
import { Link } from "react-router-dom";

import { RiHome5Fill } from "react-icons/ri";
import { MdCatchingPokemon } from "react-icons/md";

const BottomNav = () => {
  return (
    <nav className="w-full sticky bottom-0 mt-8 bg-sky-800 px-2 sm:px-4 py-2.5">
      <div className="grid grid-flow-row auto-rows-max py-1 grid-cols-2">
        <Link to={'/'}>
          <a href="#icon" className="text-white flex flex-col items-center text-xs">
            <RiHome5Fill className="w-8 h-8 text-white" />
            Home
          </a>
        </Link>
        <Link to={'/mypokemon'}>
          <a href="#icon" className="text-white flex flex-col items-center text-xs">
            <MdCatchingPokemon className="w-8 h-8 text-white" />
            My Pokemon
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
