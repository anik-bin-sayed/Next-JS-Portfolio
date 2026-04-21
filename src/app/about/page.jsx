import AboutPageTopSection from "@/components/About/AboutPageTopSection";
import AboutSegment from "@/components/About/AboutSegment";
import React from "react";

export const metadata = {
  title: "About Anik",
  description:
    "Learn more about Anik, a passionate web developer skilled in React, Next.js, and modern web technologies. Focused on building clean, responsive, and scalable web applications.",
};

const page = () => {
  return (
    <>
      <AboutPageTopSection />
      <AboutSegment />
    </>
  );
};

export default page;
