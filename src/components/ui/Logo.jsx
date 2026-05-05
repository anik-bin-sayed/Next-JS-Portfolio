import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <div className="relative w-8 h-8 bg-linear-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center rotate-45 overflow-hidden">
        <span
          className="text-white text-2xl font-extrabold -rotate-45 w-full h-full border-6 rounded-full -mb-6.25 -mr-6.25"
          style={{ top: "70px" }}
        ></span>
      </div>

      <span
        className="font-bold text-white text-2xl tracking-wider"
        style={{ fontFamily: "Pacifico, cursive" }}
      >
        Anik
      </span>
    </Link>
  );
};

export default Logo;
