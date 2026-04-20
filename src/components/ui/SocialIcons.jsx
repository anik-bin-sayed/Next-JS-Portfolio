"use client";

import React from "react";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

const SocialIcons = () => {
  const iconStyle =
    "group relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-red-500 hover:shadow-[0_0_10px_rgba(239,68,68,0.6)] transition-all duration-300 hover:scale-110 active:scale-95";

  const tooltipStyle =
    "absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap border border-white/20";

  return (
    <div className="flex gap-4">
      {/* GitHub */}
      <a
        href="https://github.com/anik-bin-sayed"
        target="_blank"
        rel="noopener noreferrer"
        className={iconStyle}
      >
        <FaGithub />
        <span className={tooltipStyle}>GitHub</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/anik-ibne-sayed-b61498365/?skipRedirect=true"
        target="_blank"
        rel="noopener noreferrer"
        className={iconStyle}
      >
        <FaLinkedinIn />
        <span className={tooltipStyle}>LinkedIn</span>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/anikbinsayed206"
        target="_blank"
        rel="noopener noreferrer"
        className={iconStyle}
      >
        <FaFacebookF />
        <span className={tooltipStyle}>Facebook</span>
      </a>

      {/* HackerRank */}
      <a
        href="https://www.hackerrank.com/profile/anikbinsayed206"
        target="_blank"
        rel="noopener noreferrer"
        className={iconStyle}
      >
        <SiHackerrank />
        <span className={tooltipStyle}>HackerRank</span>
      </a>
    </div>
  );
};

export default SocialIcons;
