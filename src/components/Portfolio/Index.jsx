"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import projectsData from "./PortfolioData";
import LinkButton from "../ui/LinkButton";

const Portfolio = () => {
  const [displayFilter, setDisplayFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
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

  const filteredProjects =
    displayFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === displayFilter);

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "Full Stack" },
  ];

  const handleFilterChange = (value) => {
    if (value === displayFilter) return;
    setIsLoading(true);
    setTimeout(() => {
      setDisplayFilter(value);
      setTimeout(() => setIsLoading(false), 200);
    }, 150);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full py-24 px-6 md:px-20 bg-black text-white"
    >
      <div className="absolute inset-0 bg-linear-to-b from-black to-gray-900" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent works. Each project is built with passion
            and modern technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleFilterChange(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                displayFilter === cat.value
                  ? "bg-rose-600 text-white shadow-md"
                  : "bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {isLoading && (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-3 border-rose-500/30 border-t-rose-500 rounded-full animate-spin" />
          </div>
        )}

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-rose-500/50 transition-all duration-300 hover:scale-[1.02] ${
                inView && !isLoading
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              {project.featured && (
                <div className="absolute top-3 left-3 z-20 px-2 py-1 bg-rose-600 rounded-md text-xs font-bold text-white shadow">
                  FEATURED
                </div>
              )}

              <div className="relative overflow-hidden h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={project.featured}
                />

                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      project.demo === "#"
                        ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                        : "bg-rose-600 text-white hover:bg-rose-700"
                    }`}
                    onClick={(e) => project.demo === "#" && e.preventDefault()}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                      project.github === "#"
                        ? "border-gray-500 text-gray-400 cursor-not-allowed"
                        : "border-white/30 text-white hover:border-rose-400 hover:bg-rose-500/10"
                    }`}
                    onClick={(e) =>
                      project.github === "#" && e.preventDefault()
                    }
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-mono bg-white/10 border border-white/20 rounded-full text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <LinkButton
            text="View All Projects on GitHub"
            link="https://github.com/anik-bin-sayed"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
