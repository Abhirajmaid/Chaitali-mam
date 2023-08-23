"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur{" "}
        <span className="font-medium">Lorem</span>, I decided to pursue my
       Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
        <span className="font-medium">Lorem, ipsum web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sint inventore quod.
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, nemo.{" "}
        <span className="font-medium">Lorem ipsum dolor sit amet.</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">Lorem ipsum dolor sit.</span>, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus praesentium incidunt reiciendis laudantium, rerum iusto.{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Lorem, ipsum dolor.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </motion.section>
  );
}
