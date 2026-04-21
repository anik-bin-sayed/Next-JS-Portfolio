import React from "react";
import LinkButton from "../ui/LinkButton";
import { FaDesktop } from "react-icons/fa";
import { TbWorldCheck } from "react-icons/tb";
import { SiVorondesign } from "react-icons/si";

const WhatIDo = () => {
  const services = [
    {
      title: "WEB DESIGN",
      description:
        "I design clean, modern, and responsive user interfaces using the latest design trends. My focus is on creating visually appealing layouts that provide a smooth user experience across all devices.",
      icon: <FaDesktop className="w-8 h-8 text-rose-400" />,
    },
    {
      title: "FRONTEND DEVELOPMENT",
      description:
        "I build interactive and dynamic user interfaces using React and Next.js. I focus on performance, reusable components, and writing clean, maintainable code.",
      icon: <SiVorondesign className="w-8 h-8 text-rose-400" />,
    },
    {
      title: "FULL STACK DEVELOPMENT",
      description:
        "I develop complete web applications by integrating frontend and backend technologies. From API integration to database handling, I can build functional and scalable solutions.",
      icon: <TbWorldCheck className="w-8 h-8 text-rose-400" />,
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
            <h2 className="text-xl sm:text-xl md:text-2xl font-medium tracking-tight mb-4">
              From understanding your requirements,
              <br />
              designing a blueprint and delivering the final product,
              <br />I do everything that falls in between these lines.
            </h2>
            <LinkButton text="View Portfolio" link="/portfolio" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-rose-500/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-5 inline-flex p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                <div className="mt-5 w-12 h-px bg-linear-to-r from-rose-500 to-transparent group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
