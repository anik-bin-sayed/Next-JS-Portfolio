import ServiceSegment from "@/components/Service/ServiceSegment";
import Skill from "@/components/Service/Skill";
import React from "react";

export const metadata = {
  title: "Services",
  description:
    "Professional web design, frontend, and full stack development services by Anik Hossen. Specialized in building modern, responsive, and high-performance web applications using React, Next.js, and Tailwind CSS.",
};

const Service = () => {
  return (
    <>
      <Skill />
      <ServiceSegment />
    </>
  );
};

export default Service;
