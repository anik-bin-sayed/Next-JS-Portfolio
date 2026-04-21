import React from "react";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { BiDollarCircle } from "react-icons/bi";
import { FaRegEye, FaSearch } from "react-icons/fa";
import { PiTimerLight } from "react-icons/pi";
import { TiSupport } from "react-icons/ti";

const AboutSegment = () => {
  const reasons = [
    {
      title: "Clean & Modern Code",
      description:
        "I write maintainable, scalable, and well-documented code that follows best practices and industry standards.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Fast & Responsive",
      description:
        "Every project is optimized for speed and works flawlessly across all devices and screen sizes.",
      icon: <PiTimerLight className="w-6 h-6" />,
    },
    {
      title: "Pixel Perfect Design",
      description:
        "Attention to every detail ensures that the final product matches the design perfectly.",
      icon: <FaRegEye className="w-6 h-6" />,
    },
    {
      title: "SEO Optimized",
      description:
        "Built-in SEO best practices to help your website rank higher and reach more audience.",
      icon: <FaSearch className="w-6 h-6" />,
    },
    {
      title: "24/7 Support",
      description:
        "I'm always available to help with any issues or questions even after the project is complete.",
      icon: <TiSupport className="w-6 h-6" />,
    },
    {
      title: "Affordable & On Time",
      description:
        "Quality work delivered within deadlines and budget without any hidden costs.",
      icon: <BiDollarCircle className="w-6 h-6" />,
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
              Why Choose Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Why You Should <span className="text-rose-400">Choose Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I bring expertise, dedication, and a passion for creating
            exceptional digital experiences that help your business grow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-rose-500/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 group-hover:bg-rose-500/20 transition-colors">
                  {reason.icon}
                </div>

                <h3 className="text-lg font-semibold mb-2 tracking-tight">
                  {reason.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {reason.description}
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

export default AboutSegment;
