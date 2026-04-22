"use client";

import React, { useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

const initialState = {
  name: "",
  email: "",
  message: "",
};
const ContactSection = () => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const formSpareUrl = `https://formspree.io/f/${process.env.FROMSPARE_KEY}`;

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(formSpareUrl, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setSuccess("Message sent successfully!");
        setFormData(initialState);
        setError({});
      } else {
        setSuccess("");
        setError({ form: "Failed to send message!" });
      }
    } catch (err) {
      setError({ form: "Something went wrong!" });
    }

    setLoading(false);
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <section className="relative w-full bg-black text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-gray-900 via-black to-gray-900" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 blur-[130px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <div className="inline-flex">
              <span className="text-xs font-semibold uppercase tracking-wide text-rose-400 border border-rose-500/30 rounded-full px-4 py-1.5 bg-rose-500/5">
                Contact
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              LET'S DISCUSS
              <br />
              YOUR PROJECT!
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Let’s turn your ideas into reality. I’m open to freelance work,
              collaborations, and exciting new projects.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MdOutlineMailOutline className="w-5 h-5 text-rose-400" />
                <span>anikbinsayed206@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FiPhone className="w-5 h-5 text-rose-400" />
                <span>+8801616-176409</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-colors"
                  placeholder="Your name"
                />
                {error.name && (
                  <p className="text-red-400 text-sm mt-1">{error.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-colors"
                  placeholder="you@example.com"
                />
                {error.email && (
                  <p className="text-red-400 text-sm mt-1">{error.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
                {error.message && (
                  <p className="text-red-400 text-sm mt-1">{error.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-linear-to-r from-rose-500 to-rose-600 text-white font-semibold hover:from-rose-600 hover:to-rose-700 transition-all duration-300 transform  focus:outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer"
              >
                {loading ? "Sending..." : "SUBMIT"}
              </button>
              {success && (
                <p className="text-green-400 font-medium">{success}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
