"use client";
import React from "react";
import { motion } from "framer-motion";
import MarqueeExperience from "./MarqueeExperience";

const Experience = () => {
  return (
    <div
      id="experiences"
      className="dark:bg-navy-stack-back-smooth bg-lightblue-stack-top w-full min-h-full py-10"
    >
      <motion.p 
        className="lg:text-4xl text-2xl font-extrabold text-center text-primary mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Professional Experience
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <MarqueeExperience />
      </motion.div>
    </div>
  );
};

export default Experience;
