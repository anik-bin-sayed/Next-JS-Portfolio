"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaCode,
} from "react-icons/fa";

export const skills = [
  { name: "HTML", level: 90, icon: FaHtml5, color: "#e44d26" },
  { name: "CSS / Tailwind", level: 85, icon: FaCss3Alt, color: "#264de4" },
  { name: "JavaScript", level: 80, icon: FaJs, color: "#f7df1e" },
  { name: "React", level: 85, icon: FaReact, color: "#61dafb" },
  { name: "Node.js / Express", level: 75, icon: FaNodeJs, color: "#68a063" },
  { name: "MongoDB / MySQL", level: 70, icon: FaDatabase, color: "#4db33d" },
  { name: "Python / Django", level: 80, icon: FaPython, color: "#3776ab" },
  { name: "DSA", level: 80, icon: FaCode, color: "#00a8ff" },
];

const Skill = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    const element = sectionRef.current;
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const Circle = ({ level, start, skillColor }) => {
    const [progress, setProgress] = useState(0);
    const animationRef = useRef(null);
    const startTimeRef = useRef(null);
    const duration = 4000;

    useEffect(() => {
      if (!start) return;

      const animate = (timestamp) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const elapsed = timestamp - startTimeRef.current;
        const t = Math.min(1, elapsed / duration);
        const currentLevel = Math.floor(t * level);
        setProgress(currentLevel);

        if (elapsed < duration) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setProgress(level);
          if (animationRef.current) cancelAnimationFrame(animationRef.current);
        }
      };

      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
        startTimeRef.current = null;
      };
    }, [start, level]);

    const size = 100;
    const stroke = 6;
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={stroke}
            fill="none"
          />
          {/* Animated progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={skillColor}
            strokeWidth={stroke}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
          {/* Percentage text */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy="0.3em"
            className="fill-white text-lg font-semibold"
            transform="rotate(90 50 50)"
          >
            {progress}%
          </text>
        </svg>
      </div>
    );
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full min-h-screen py-20 px-6 md:px-20 bg-[#0a0a0f] text-white"
    >
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-100 h-100 bg-orange-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I work with to build fast, modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group relative p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-orange-400/50 hover:bg-white/10 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div
                    className="text-3xl mb-1 transition-transform duration-200 group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    <Icon />
                  </div>

                  <Circle
                    level={skill.level}
                    start={inView}
                    skillColor={skill.color}
                  />

                  <h3 className="text-lg font-semibold text-gray-100">
                    {skill.name}
                  </h3>

                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: inView ? `${skill.level}%` : "0%",
                        backgroundColor: skill.color,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
