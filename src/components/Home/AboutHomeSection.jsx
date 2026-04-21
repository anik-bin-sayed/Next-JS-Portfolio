"use client";

import React, { useEffect, useState } from "react";
import LinkButton from "../ui/LinkButton";

const AboutHomeSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frame;

    const handleMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        frame = undefined;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-4 sm:px-6 py-20 md:py-28">
      <div className="absolute inset-0 bg-linear-to-b from-black to-gray-900" />

      <div
        className="absolute w-96 h-96 bg-rose-500/5 blur-[100px] rounded-full transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
        }}
      />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <div className="inline-flex">
              <span className="text-xs font-semibold uppercase tracking-tight text-red-500 border border-red-500 rounded-full px-4 py-1.5 bg-rose-500/5">
                About Me
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              I design professional <br />
              <span className="text-red-600">& beautiful websites</span>
            </h2>

            <div className="mt-4">
              <p className="text-gray-300 text-base sm:text-md leading-relaxed">
                I'm a passionate Full Stack Developer who enjoys building
                modern, fast, and scalable web applications. I focus on solving
                real-world problems through clean architecture and efficient
                code. My goal is to create seamless and engaging user
                experiences using technologies like React, Next.js, and various
                backend frameworks. I love turning complex ideas into simple,
                functional, and visually smooth digital products.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {[
                "Python",
                "Django",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border hover:border-red-600 border-white/10 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-6">
              <LinkButton text="Let's work together" link="" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-5">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-gray-300 leading-relaxed text-justify">
                  I am a passionate web developer focused on building modern and
                  scalable web applications.I am strengthening my skills in
                  React, Next.js, and backend technologies while continuously
                  improving my problem-solving abilities.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-gray-300 leading-relaxed text-justify">
                  I enjoy turning ideas into real-world projects. From designing
                  responsive user interfaces to working with APIs and databases,
                  I am constantly exploring new tools and best practices to
                  write clean and efficient code.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-gray-300 leading-relaxed text-justify">
                  I am highly motivated to grow as a software developer and
                  build impactful products. I believe in continuous learning,
                  experimenting with new technologies, and improving every day
                  to reach a professional level in the tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHomeSection;
