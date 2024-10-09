"use client";

import { motion } from "framer-motion";
import { EventGrid } from "./event-grid";

export function Events() {
  return (
    <div className="flex flex-col w-full md:gap-y-14 gap-y-12 px-5 md:px-32 pb-20 my-20 bg-brand-bg">
      <motion.h1
        className="text-3xl md:text-5xl font-bold font-neue text-navy-blue tracking-tighter text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          damping: 40,
          stiffness: 100,
        }}
        viewport={{ once: true }}
      >
        Our featured
        <span className="bg-primary-light px-2 pt-2 text-navy-blue rounded-2xl font-neue md:mx-2 flex-nowrap mx-2">
          Events
        </span>
      </motion.h1>
      <EventGrid />
    </div>
  );
}
