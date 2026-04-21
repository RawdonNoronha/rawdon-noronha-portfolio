import React, { useEffect, useRef } from "react";

const CustomCircle = () => {
  const leftEye = useRef(null);
  const rightEye = useRef(null);

  useEffect(() => {
    const handleMove = (e: any) => {
      const moveEye = (eye: any) => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeX;
        const dy = e.clientY - eyeY;

        const angle = Math.atan2(dy, dx);
        const distance = Math.min(1.5, Math.hypot(dx, dy) / 100);

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        eye.setAttribute("transform", `translate(${x}, ${y})`);
      };

      moveEye(leftEye.current);
      moveEye(rightEye.current);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <svg width="25" height="25" viewBox="0 0 20 20" className="text-white">
      {/* Face */}
      <circle cx="10" cy="10" r="10" fill="currentColor" />

      {/* LEFT EYE */}
      <g ref={leftEye}>
        <rect x="5.5" y="7" width="4" height="4" rx="1" className="fill-black">
          <animate
            attributeName="height"
            values="4;4;4;0.5;4"
            keyTimes="0;0.7;0.8;0.9;1"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values="7;7;7;8.75;7"
            keyTimes="0;0.7;0.8;0.9;1"
            dur="4s"
            repeatCount="indefinite"
          />
        </rect>
      </g>

      {/* RIGHT EYE */}
      <g ref={rightEye}>
        <rect x="10.5" y="7" width="4" height="4" rx="1" className="fill-black">
          <animate
            attributeName="height"
            values="4;4;4;0.5;4"
            keyTimes="0;0.7;0.8;0.9;1"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values="7;7;7;8.75;7"
            keyTimes="0;0.7;0.8;0.9;1"
            dur="4s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </svg>
  );
};

export default CustomCircle;
