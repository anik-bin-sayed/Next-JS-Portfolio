import Portfolio from "@/components/Portfolio/Index";
import React from "react";

export const metadata = {
  title: "My Work & Projects",
  description:
    "Discover real-world web development projects by Anik Hossen. Featuring responsive websites and full stack applications built using React, Next.js, and modern technologies.",
};

const page = () => {
  return (
    <>
      <Portfolio />
    </>
  );
};

export default page;
