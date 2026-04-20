"use client";

import React, { useState } from "react";
import Image from "next/image";
import projectsData from "./PortfolioData";
import LinkButton from "../ui/LinkButton";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "fullstack", label: "Full Stack" },
  ];

  return (
    <section
      id="projects"
      className="relative w-full py-24 px-6 md:px-20 bg-[#050505] text-white overflow-hidden"
    >
      <div className="absolute top-0 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-crimson/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-linear-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
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
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat.value
                  ? "bg-crimson text-white shadow-lg shadow-crimson/30"
                  : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-crimson/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-crimson/50 hover:shadow-2xl hover:shadow-crimson/80 hover:outline outline-amber-700"
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 px-2 py-1 bg-linear-to-r from-crimson to-orange-500 rounded-md text-xs font-bold text-white shadow-lg">
                  FEATURED
                </div>
              )}

              <div className="relative overflow-hidden h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={project.featured}
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 bg-crimson rounded-lg text-sm font-semibold text-white transform hover:scale-105 ${
                      project.demo === "#"
                        ? "bg-gray-500 text-gray-400 cursor-not-allowed hover:scale-100"
                        : "hover:bg-red-600 transition"
                    }`}
                    onClick={(e) => project.demo === "#" && e.preventDefault()}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-lg text-sm font-semibold border transition transform hover:scale-105 ${
                      project.github === "#"
                        ? "border-gray-500 text-gray-400 cursor-not-allowed bg-white/5 hover:scale-100"
                        : "border-white/20 text-white hover:border-crimson/50 hover:bg-crimson/10"
                    }`}
                    onClick={(e) =>
                      project.github === "#" && e.preventDefault()
                    }
                  >
                    Source Code
                  </a>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-crimson transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-crimson/0 via-crimson/30 to-crimson/0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <LinkButton text="View All Project On Github" link="/" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
