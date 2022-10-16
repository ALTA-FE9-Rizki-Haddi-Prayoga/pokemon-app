import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full bg-sky-800 px-2 sm:px-4 py-2.5 mb-3">
      <div className="container flex justify-center items-center mx-auto">
        <Link to={"/"}>
          <h2 className="text-white font-semibold text-xl py-2">Pokemon App</h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
