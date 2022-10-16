import React from "react";

import Navbar from "components/Navbar";
import BottomNav from "components/BottomNav";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center bg-slate-400">
      <div className="relative w-full md:w-1/2 h-screen bg-slate-800 overflow-auto">
        <Navbar />
        <div>{children}</div>
        <BottomNav />
      </div>
    </div>
  );
};

export default Layout;
