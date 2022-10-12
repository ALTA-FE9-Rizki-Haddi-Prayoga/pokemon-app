import React from "react";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";

const Layout = () => {
  return (
    <main className="flex justify-center bg-gradient-to-r from-sky-600 to-indigo-600">
      <div className="layout-container bg-slate-800 w-full md:w-1/2 h-screen">
        <Navbar />
        <BottomNav />
      </div>
    </main>
  );
};

export default Layout;
