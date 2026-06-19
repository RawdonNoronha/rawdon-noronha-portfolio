// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         shake: {
//           "0%, 100%": { transform: "translateX(0)" },
//           "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-1px)" },
//           "20%, 40%, 60%, 80%": { transform: "translateX(1px)" },
//         },
//       },
//       animation: {
//         shake: "shake 0.5s ease-in-out",
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "vivid-orange": "#FA7108"
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
      },
      animation: {
        shake: "shake 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
};