"use client";
import CustomCircle from "@/app/assests/CustomCircle";
import React from "react";

const Header = () => {
  return (
    <header className="w-full sticky top-0 left-0 backdrop-blur-sm">
      <div className="ml-0 mr-0 md:mx-20">
        {/* Gradient (behind everything) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black from-30% via-black/80 from-30% via-black/40 from-20% to-transparent pointer-events-none z-0"></div>

        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-8 relative z-10">
          {/* Logo */}
          <CustomCircle />

          {/* Links (desktop only) */}
          <nav className="hidden md:flex gap-6 text-white">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>

        {/* Mobile Bottom Nav */}
        <nav className="fixed bottom-0 left-0 w-full flex justify-around py-3 bg-white border-t md:hidden z-20">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
