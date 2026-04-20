import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-bold text-white tracking-tight flex items-center"
    >
      <span>AN</span>
      <span className="text-red-500 text-3xl px-1">i</span>
      <span>K</span>
    </Link>
  );
};

export default Logo;
