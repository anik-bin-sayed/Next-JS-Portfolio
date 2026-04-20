"use client";

import Link from "next/link";
import React from "react";
import { FaDownload, FaLongArrowAltRight } from "react-icons/fa";

const LinkButton = ({ text = "Button", link = "/", isDownload = false }) => {
  return (
    <Link
      href={link}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-red-800 border border-red-900 text-white font-medium transition-all duration-300  hover:bg-red-900 hover:shadow-lg hover:shadow-red-500/25 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black group active:scale-95"
    >
      <span>{text}</span>
      {isDownload ? (
        <FaDownload className="transition-transform duration-300 group-hover:translate-y-1 group-hover:animate-bounce" />
      ) : (
        <FaLongArrowAltRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:animate-pulse" />
      )}
    </Link>
  );
};

export default LinkButton;
