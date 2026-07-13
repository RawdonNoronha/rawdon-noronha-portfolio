import React from "react";

const CustomLink = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="bg-vivid-orange"
      aria-hidden="true"
      role="presentation"
    >
      <g 
    //   style="transform: none; transform-origin: 50% 50%; transform-box: fill-box;"
      >
        <path d="m21 3-9 9"></path>
        <path d="M15 3h6v6"></path>
      </g>
      <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path>
    </svg>
  );
};

export default CustomLink;
