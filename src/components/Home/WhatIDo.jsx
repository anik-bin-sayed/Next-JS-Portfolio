import Link from "next/link";
import React from "react";
import LinkButton from "../ui/LinkButton";

const WhatIDo = () => {
  const services = [
    {
      title: "UI/UX DESIGN",
      description:
        "An effective UI/UX is what captures attention and spreads a clear message. I make sure the design is innovative and neat with all of this.",
      icon: (
        <svg
          className="w-8 h-8 text-rose-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "WEB DEVELOPMENT",
      description:
        "If you are looking for a developer who'll take over the research and development of your website, I am a well-established professional to help you with this.",
      icon: (
        <svg
          className="w-8 h-8 text-rose-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9"
          />
        </svg>
      ),
    },
    {
      title: "APP DEVELOPMENT",
      description:
        "If you are looking for a user-friendly app that will attract more mobile users, I can help you design and build a platform with the latest and trendiest look and feel.",
      icon: (
        <svg
          className="w-8 h-8 text-rose-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-gray-900 via-black to-gray-900" />

      <div className="absolute top-20 left-1/4 w-72 h-72 bg-rose-500/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex mb-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-rose-400 border border-rose-500/30 rounded-full px-4 py-1.5 bg-rose-500/5">
              What I Do
            </span>
          </div>
          <div>
            <h2 className="text-3xl sm:text-2xl md:text-3xl font-medium tracking-tight mb-4">
              From understanding your requirements,
              <br />
              designing a blueprint and delivering the final product,
              <br />I do everything that falls in between these lines.
            </h2>
            <LinkButton text="View Portfolio" link="/portfolio" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-rose-500/30 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Card glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-5 inline-flex p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                {/* Decorative line */}
                <div className="mt-5 w-12 h-px bg-gradient-to-r from-rose-500 to-transparent group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
