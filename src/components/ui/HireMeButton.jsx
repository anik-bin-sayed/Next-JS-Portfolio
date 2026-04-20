import Link from "next/link";
import React from "react";

const HireMeButton = () => {
  return (
    <Link
      href="/"
      className="relative group overflow-hidden px-5 py-2 text-sm font-medium rounded-full 
             bg-linear-to-r from-red-600 to-red-700 text-white shadow-lg
             transition-all duration-300 ease-out
             hover:shadow-red-500/50 hover:shadow-xl hover:scale-105
             active:scale-95
             before:absolute before:inset-0 before:-translate-x-full
             before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent
             hover:before:translate-x-full before:transition-transform before:duration-700
             focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
    >
      <span className="relative flex items-center gap-1">
        Hire Me
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>
    </Link>
  );
};

export default HireMeButton;
