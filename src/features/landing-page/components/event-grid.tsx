"use client";

import Image from "next/image";
import { CustomButton } from "./CustomButtom";
import { IMAGES } from "@/assets";
import { motion } from "framer-motion";

export function EventGrid() {
  const EventCard = () => {
    return (
      <div className="bg-[#FFF4D4] border border-brand-yellow flex items-start justify-start rounded-2xl w-full p-4 gap-4 h-48 md:h-auto md:min-w-[80%] md:max-w-[80%] md:gap-12">
        <div className="aspect-square md:aspect-video h-full object-cover rounded-xl overflow-hidden border border-white shadow-lg">
          <Image
            src={IMAGES.kratos24}
            alt="Event 1"
            className="w-full h-full object-cover rounded-lg "
          />
        </div>
        <div className="flex flex-col tracking-tighter justify-between h-full py-2">
          <div>
            <h1 className="md:text-3xl text-xl font-bold font-neue text-navy-blue">
              Kratos 24
            </h1>
            <p className="text-sm md:text-xl font-neue text-navy-blue">
              Annual Conference
            </p>
            <p className="text-sm hidden md:inline-block font-semibold text-navy-blue">
              Bombay MGOCSM
            </p>
          </div>
          <div>
            <p className="text-sm md:text-xl font-semibold text-navy-blue">
              11th - 13th Oct, 2024
            </p>
            <p className="text-sm md:text-xl font-semibold text-navy-blue">
              Gregorian Community, Roha
            </p>
          </div>
          <CustomButton text="Register" className="w-full md:w-fit" />
        </div>
      </div>
    );
  };

  return (
    <motion.div
      className="md:flex-row flex flex-col gap-10 w-full md:justify-start overflow-auto "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.8,
        duration: 0.8,
        type: "spring",
        damping: 40,
        stiffness: 100,
      }}
      viewport={{ once: true }}
    >
      <EventCard />
      <EventCard />
    </motion.div>
  );
}
