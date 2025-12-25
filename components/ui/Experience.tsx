"use client";
import React from "react";
import MarqueeExperience from "./MarqueeExperience";

const Experience = () => {
  return (
    <div id="experiences" className="w-full min-h-full py-10">
      <p className="lg:text-4xl text-2xl font-extrabold text-center text-primary mb-4">
        Professional Experience
      </p>
      <div>
        <MarqueeExperience />
      </div>
    </div>
  );
};

export default Experience;
