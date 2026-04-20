"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../ui/Logo";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Service", link: "/service" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const menuRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navbar = menuRef.current;
    const particlesContainer = particlesRef.current;
    if (!navbar || !particlesContainer) return;

    let timeouts = [];
    let particles = [];

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particlesContainer.appendChild(particle);
      particles.push(particle);
      animateParticle(particle);
    };

    const resetParticle = (particle) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.opacity = "0";
      return { x, y };
    };

    const animateParticle = (particle) => {
      const pos = resetParticle(particle);
      const duration = Math.random() * 5 + 5;
      const timeout1 = setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        particle.style.left = `${pos.x + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${pos.y + (Math.random() * 10 - 5)}%`;

        const timeout2 = setTimeout(() => {
          animateParticle(particle);
        }, duration * 1000);
        timeouts.push(timeout2);
      }, Math.random() * 2000);
      timeouts.push(timeout1);
    };

    for (let i = 0; i < 20; i++) {
      createParticle();
    }

    const handleMouseMove = (e) => {
      const rect = navbar.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.width = "4px";
      particle.style.height = "4px";
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.opacity = "0.2";
      particlesContainer.appendChild(particle);
      particles.push(particle);

      const timeout = setTimeout(() => {
        particle.style.transition = "all 1.5s ease-out";
        particle.style.opacity = "0";
        particle.style.transform = "scale(0.5)";
        particle.style.left = `${x + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${y + (Math.random() * 10 - 5)}%`;

        const removeTimeout = setTimeout(() => {
          if (particle.parentNode) particle.remove();
          particles = particles.filter((p) => p !== particle);
        }, 1500);
        timeouts.push(removeTimeout);
      }, 50);
      timeouts.push(timeout);
    };

    navbar.addEventListener("mousemove", handleMouseMove);

    return () => {
      navbar.removeEventListener("mousemove", handleMouseMove);
      timeouts.forEach(clearTimeout);
      particles.forEach((particle) => {
        if (particle.parentNode) particle.remove();
      });
      if (particlesContainer) particlesContainer.innerHTML = "";
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 w-full z-9999 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-black/60 shadow-xl py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="particles-container" ref={particlesRef} />

      <div className="max-w-7xl mx-auto flex justify-between items-center w-[90%]">
        <Logo />

        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link
                key={item.name}
                href={item.link}
                className={`relative transition duration-300 group ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 h-0.5 bg-red-500 transition-all duration-300 ${
                    isActive
                      ? "w-1.5 h-1.5 rounded-full left-1/2 -translate-x-1/2"
                      : "left-0 w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black/80 backdrop-blur-lg`}
      >
        <ul className="flex flex-col items-center py-6 space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white text-lg"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .particles-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
        }
        .particle {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          pointer-events: none;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
