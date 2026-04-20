"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import SocialIcons from "../ui/SocialIcons";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y - rect.height / 2) / 25;
    const rotateY = (rect.width / 2 - x) / 25;

    imageRef.current.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    imageRef.current.style.transform =
      "perspective(1200px) rotateX(0) rotateY(0) scale(1)";
  };

  useEffect(() => {
    let frame;

    const handleMove = (e) => {
      if (frame) return;

      frame = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        frame = null;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] text-white overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#050505]" />
      <div
        className="absolute w-125 h-125 bg-red-600/20 blur-[80px] rounded-full"
        style={{
          left: `${mousePosition.x * 0.02}px`,
          top: `${mousePosition.y * 0.02}px`,
        }}
      />
      <div
        className="absolute w-100 h-100 bg-blue-600/20 blur-[70px] rounded-full"
        style={{
          right: `${mousePosition.x * 0.01}px`,
          bottom: `${mousePosition.y * 0.01}px`,
        }}
      />
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 items-center z-10 py-20">
        <div className="space-y-6 text-center lg:text-left">
          <p className="text-sm text-red-400 uppercase tracking-widest">
            Available for work
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Hi, I'm <br />
            <span className="bg-linear-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Anik
            </span>
          </h1>

          <p className="text-gray-400 max-w-lg mx-auto lg:mx-0">
            I build exceptional and accessible digital experiences for the web.
            Focused on creating elegant solutions to complex problems.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <Link
              href=""
              className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition font-semibold shadow-lg shadow-red-600/30"
            >
              View Work (Github)
            </Link>

            <a
              href="/contact"
              className="px-6 py-3 rounded-lg border border-gray-600 hover:border-red-500 transition"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-4">
            {[
              "React",
              "Next JS",
              "Node.js",
              "Django",
              "FastApi",
              "Tailwind",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full hover:border-red-500 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end relative">
          <div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative transition-transform duration-300"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute -inset-6 bg-linear-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 blur-2xl rounded-full" />
            <div className="absolute -inset-3 rounded-full border border-red-500/30 animate-spin-slow"></div>
            <div className="absolute -inset-3 rounded-full border border-dashed border-white/10 animate-spin-slow-reverse"></div>
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-white/10 shadow-xl">
              <Image
                src="/images/anik.jpg"
                alt="anik"
                fill
                sizes="(max-width: 640px) 14rem, (max-width: 1024px) 16rem, 20rem"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent pointer-events-none"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-3 -left-3 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 flex gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
