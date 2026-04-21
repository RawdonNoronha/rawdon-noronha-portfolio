"use client"
import React, { useState } from "react";

const Header = () => {
  const [selected, setSelected] = useState(false);

  return (
    <header className="w-full sticky top-0 left-0 backdrop-blur-sm">
      <div className=" ml-0 mr-0 md:ml-20 md:mr-20">
        {/* Top fade layer */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/5 pointer-events-none"></div>

        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-8">
          {/* Logo */}
          <div className="text-xl text-white font-bold">Logo</div>

          {/* Links (desktop only) */}
          <nav className="hidden md:flex gap-6">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>

        {/* Mobile Bottom Nav */}
        <nav className="fixed bottom-0 left-0 w-full flex justify-around py-3 bg-white border-t md:hidden">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
