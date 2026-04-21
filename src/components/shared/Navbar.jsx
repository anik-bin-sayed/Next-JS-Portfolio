"use client";

import React, { useState, useRef, useEffect } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../ui/Logo";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Service", link: "/service" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 w-full z-9999 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-black/60 shadow-xl py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center w-[90%]">
        <Logo />

        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link
                key={item.name}
                href={item.link}
                className={`relative transition duration-300 group ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 h-0.5 bg-red-500 transition-all duration-300 ${
                    isActive
                      ? "w-1.5 h-1.5 rounded-full left-1/2 -translate-x-1/2"
                      : "left-0 w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black/80 backdrop-blur-lg`}
      >
        <ul className="flex flex-col items-center py-6 space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white text-lg"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
