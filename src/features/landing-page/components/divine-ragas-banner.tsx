"use client";

import { motion } from "framer-motion";
import { IMAGES } from "@/assets";
import Image from "next/image";
import { CustomButton } from "./CustomButtom";

export default function DivineRagasBanner() {
  return (
    <motion.div
      className="relative md:my-20 my-10 md:px-48 px-5"
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
      <div className="bg-gradient-to-t from-primary-light to-transparent rounded-3xl w-full flex flex-col md:flex-row items-start justify-between tracking-tighter md:h-[300px] md:pl-16">
        <div className="flex flex-col gap-1 px-5 py-20 flex-grow h-full">
          <h1 className="text-4xl md:text-5xl font-neue text-navy-blue ">
            Join Divin Ragas
          </h1>
          <p className="text-lg font-medium ">
            the music wing of Bombay Mgocsm
          </p>
          <CustomButton text="Join Now" className="mt-4" />
        </div>
        <div className="md:h-full">
          <Image
            src={IMAGES.musicIllustration}
            alt="music illustration"
            className="h-full object-contain w-fit"
          />
        </div>
      </div>
    </motion.div>
  );
}
