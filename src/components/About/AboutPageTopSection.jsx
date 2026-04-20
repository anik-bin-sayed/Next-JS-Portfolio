"use client";

import React from "react";
import Image from "next/image";
import LinkButton from "@/components/ui/LinkButton";

const ABOUT_TEXT = {
  title: "About Me",
  desc: "I am a passionate Full Stack Developer focused on building modern, high-performance and scalable web applications. I love solving complex problems and creating smooth user experiences using React, Next.js, and backend technologies.",
};

const skills = [
  "Frontend",
  "Backend",
  "Database",
  "DSA",
  "REST API",
  "Authentication",
];

const AboutPageTopSection = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-20 px-6 md:px-20 bg-[#050505] text-white overflow-hidden flex items-center"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/30 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px]" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        <div className="w-full lg:w-2/5 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />

            <div className="relative bg-linear-to-br from-gray-900 to-gray-800 p-2 rounded-2xl">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/images/anik.jpg"
                  alt="About Anik"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-xl shadow-2xl transform transition duration-500"
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-xl bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
            </div>

            <div className="absolute -bottom-5 -right-5 bg-linear-to-r from-red-600 to-red-700 px-4 py-2 text-sm font-semibold rounded-full shadow-xl shadow-red-600/30 backdrop-blur-sm border border-white/20 ">
              Full Stack Dev
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
          <div className="relative inline-block mx-auto lg:mx-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-linear-to-r from-red-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                {ABOUT_TEXT.title}
              </span>
            </h2>
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-linear-to-r from-red-500 to-orange-400 rounded-full mx-auto lg:mx-0" />
          </div>

          {/* Description card */}
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {ABOUT_TEXT.desc}
            </p>
          </div>

          {/* Skills section */}
          <div className="space-y-3">
            <h3 className="text-sm uppercase tracking-wider text-gray-400 font-semibold flex items-center justify-center lg:justify-start gap-2">
              <span className="w-8 h-px bg-red-500/50" />
              Core Expertise
              <span className="w-8 h-px bg-red-500/50" />
            </h3>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="group relative px-4 py-2 text-sm font-medium bg-white/5 border border-white/10 rounded-full hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 cursor-default overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:scale-150 transition-transform" />
                    {skill}
                  </span>
                  <span className="absolute inset-0 bg-linear-to-r from-red-500/0 via-red-500/10 to-red-500/0 translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4 flex justify-center lg:justify-start">
            <LinkButton text="Download CV" isDownload={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageTopSection;
