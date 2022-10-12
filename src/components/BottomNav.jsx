import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md";

const BottomNav = () => {
  return (
    <nav className="sticky bottom-0 w-full mt-4 bg-slate-600 px-2 sm:px-4 py-2.5">
      <div className="grid grid-flow-row auto-rows-max grid-cols-2">
        <Link to={'/'}>
          <a href="#icon" className="text-white flex flex-col items-center text-xs">
            <FaHome className="w-8 h-8 text-white" />
            Home
          </a>
        </Link>
        <Link to={'/pokemon'}>
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
