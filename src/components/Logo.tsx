import React from "react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 md:w-12 md:h-12"
      >
        {/* Outer Silver Ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#B0B0B0"
          strokeWidth="4"
        />

        {/* Inner Dark Blue Circle */}
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="#0A192F"
        />

        {/* Diagonal Line */}
        <line
          x1="15"
          y1="85"
          x2="85"
          y2="15"
          stroke="#B0B0B0"
          strokeWidth="2"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <span className="text-xl md:text-2xl font-bold text-[#0A192F] tracking-tight">
          NE<span className="text-[#808080]">X</span>E
        </span>

        <span className="text-xl md:text-2xl font-black text-[#0A192F] tracking-tighter">
          SANERING AB
        </span>
      </div>
    </div>
  );
}
