import React from "react";
import { FaDesktop } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { SiVorondesign } from "react-icons/si";
import { TbWorldCheck } from "react-icons/tb";

const ServiceSegment = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "I design clean, modern, and responsive user interfaces that focus on usability and a smooth user experience across all devices.",
      icon: <FaDesktop className="w-8 h-8 text-rose-400" />,
    },
    {
      title: "Frontend Development",
      description:
        "I build fast and interactive user interfaces using React, Next.js, and Tailwind CSS with a focus on performance and reusable components.",
      icon: <SiVorondesign className="w-8 h-8 text-rose-400" />,
    },
    {
      title: "Full Stack Development",
      description:
        "I develop complete web applications by integrating frontend and backend, including API integration and database management.",
      icon: <TbWorldCheck className="w-8 h-8 text-rose-400" />,
    },
    {
      title: "Website Optimization",
      description:
        "I improve website performance, loading speed, and basic SEO practices to ensure a better user experience and visibility.",
      icon: <FiTrendingUp className="w-6 h-6 text-rose-400" />,
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black to-gray-900" />

      <div className="absolute top-20 left-10 w-60 h-60 bg-rose-500/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex mb-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-rose-400 border border-rose-500/30 rounded-full px-4 py-1.5 bg-rose-500/5">
              What I Offer
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Services I Provide to{" "}
            <span className="text-rose-400">Help Your Business</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            From design to deployment, I offer end-to-end solutions tailored to
            your unique needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-rose-500/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 group-hover:bg-rose-500/20 transition-colors">
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold mb-2 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 w-10 h-px bg-linear-to-r from-rose-500 to-transparent group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSegment;
