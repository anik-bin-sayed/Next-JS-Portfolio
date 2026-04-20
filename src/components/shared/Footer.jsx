"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import SocialIcons from "../ui/SocialIcons";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Skills", link: "/skills" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-gray-900 text-white overflow-hidden">
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-600/5 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gray-900 blur-[120px] rounded-full animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        {/* MAIN FOOTER CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* LEFT */}
          <div className="md:col-span-4 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center group cursor-default">
              AN
              <span className="text-red-500 text-4xl md:text-5xl px-1 transition-transform duration-300 group-hover:scale-110 inline-block">
                i
              </span>
              K
            </h1>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Crafting modern digital experiences with precision and creativity.
              Let's build something extraordinary together.
            </p>

            <div className="flex items-center gap-3 text-gray-500 text-xs">
              <span className="inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Available for work
              </span>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>

            <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="text-gray-400 hover:text-red-500 transition-all duration-300 relative group inline-block text-sm"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Connect
            </h3>

            <div className="flex items-center gap-4 hover:scale-105 transition-transform origin-left">
              <SocialIcons />
            </div>

            <div className="pt-2">
              <a
                href="mailto:anikhossen3422@gmail.com"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors text-sm group"
              >
                <span className="w-8 h-px bg-gray-600 group-hover:bg-red-500 transition-colors"></span>
                anikhossen3422@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* BACK TO TOP BUTTON */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 text-gray-400 hover:text-red-500 transition-all text-sm bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-red-500/10 shadow-lg animate-fadeIn"
          >
            <span>Back to top</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 group-hover:-translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
