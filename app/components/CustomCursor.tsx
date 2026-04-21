// "use client";
// import { motion } from "motion/react";
// import { useEffect, useState } from "react";

// export default function CustomCursor() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isPointer, setIsPointer] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });

//       // Check if hovering over interactive elements
//       const target = e.target as HTMLElement;
//       const isInteractive =
//         target.tagName === "BUTTON" ||
//         target.tagName === "A" ||
//         target.closest("button") ||
//         target.closest("a") ||
//         window.getComputedStyle(target).cursor === "pointer";

//       setIsPointer(isInteractive);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <>
//       {/* Hide default cursor */}
//       <style>{`
//         * {
//           cursor: none;
//         }
//       `}</style>

//       {/* Main cursor dot */}
//       <motion.div
//         className="pointer-events-none fixed z-50 mix-blend-multiply"
//         animate={{
//           x: mousePosition.x - 8,
//           y: mousePosition.y - 8,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 500,
//           damping: 28,
//         }}
//       >
//         <div
//           className={`w-4 h-4 rounded-full transition-colors ${
//             isPointer ? "bg-indigo-600" : "bg-gray-400"
//           }`}
//         />
//       </motion.div>

//       {/* Outer ring */}
//       <motion.div
//         className="pointer-events-none fixed z-50"
//         animate={{
//           x: mousePosition.x - 20,
//           y: mousePosition.y - 20,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 200,
//           damping: 20,
//         }}
//       >
//         <div
//           className={`w-10 h-10 rounded-full border-2 transition-colors ${
//             isPointer ? "border-indigo-600" : "border-gray-400"
//           }`}
//         />
//       </motion.div>
//     </>
//   );
// }
