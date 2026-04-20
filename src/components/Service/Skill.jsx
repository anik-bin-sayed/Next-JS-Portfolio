"use client";

import React, { useEffect, useRef, useState } from "react";

export const skills = [
  { name: "HTML", level: 90, color: "skill-html" },
  { name: "CSS / Tailwind", level: 85, color: "skill-css" },
  { name: "JavaScript", level: 80, color: "skill-js" },
  { name: "React", level: 85, color: "skill-react" },
  { name: "Node.js / Express", level: 75, color: "skill-node" },
  { name: "MongoDB / MySQL", level: 70, color: "skill-db" },
  { name: "Python / Django", level: 80, color: "skill-python" },
  { name: "Data Structures / Algorithms", level: 80, color: "skill-dsa" },
];

const Skill = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full min-h-screen py-24 px-6 md:px-20 bg-[#050505] text-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-600/20 blur-[100px] rounded-full" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I use to build efficient,
            scalable, and modern web applications.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-red-500 transition-all duration-300 hover:scale-[1.03]"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-200">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-400 transition-all duration-1000 ease-out"
                    style={{
                      width: inView ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
