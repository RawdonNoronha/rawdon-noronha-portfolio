"use client";

import React from "react";

const navigationOptions = [
  { id: 0, title: "Home", href: "/" },
  { id: 1, title: "About", href: "/About" },
  { id: 2, title: "Projects", href: "/Projects" },
  { id: 3, title: "Contact", href: "/Contact" },
];

const NavigationBar = () => {
  return (
    <div className="z-50 fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-xl">
      <div className="h-16 bg-white/95 dark:bg-neutral-900/95 text-black dark:text-white rounded-full flex items-center justify-around px-4 shadow-md dark:shadow-lg backdrop-blur-sm border border-gray-200 dark:border-neutral-700">
        {navigationOptions.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 px-2 py-1 rounded transition-colors duration-300"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default React.memo(NavigationBar);
