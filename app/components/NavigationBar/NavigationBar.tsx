"use client";
import { navigationOptions } from "@/app/constants/constants";
import React from "react";

const NavigationBar = () => {
  return (
    <nav>
      {/* <div className="navbar-offset">
        <div className="navbar-border border-1 border-slate-600">
          <div className="bg-black p-4 rounded-md justify-between space-x-10">
            {navigationOptions.map((item) => (
              <a
                key={item.id}
                href={item.href}
                // className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 px-2 py-1 rounded transition-colors duration-300"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div> */}
    </nav>
  );
};

export default React.memo(NavigationBar);

