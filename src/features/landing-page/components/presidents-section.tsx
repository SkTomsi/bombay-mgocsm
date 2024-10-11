"use client";

import { IMAGES } from "@/assets";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
export default function Presidents() {
  const presidents = [
    {
      name: "John Doe",
      quote:
        "Let MGOCSM remain the spiritual torch bearer for the younger generation of Malankara Orthodox Church in future as well. God Bless you all.",
      image: IMAGES.thirumeni,
    },
    {
      name: "John Doe",
      quote:
        "I wish many more years of Growth, learning and making difference together. Let us Pray to God almighty for his bountiful blessings on our Church and MGOCSM",
      image: IMAGES.assistantThirumeni,
    },
  ];

  function QuoteCard({
    data,
  }: {
    data: {
      name: string;
      quote: string;
      image: StaticImageData;
    };
  }) {
    const { image, name, quote } = data;

    return (
      <div className="bg-[#F0F3ED] flex rounded-3xl h-[463px] w-full overflow-hidden relative">
        <div className="flex-grow relative">
          <Image
            src={image}
            alt={name}
            className="h-[80%] md:h-full w-fit object-contain absolute md:-bottom-[7%] bottom-0 left-0"
          />
        </div>
        <div className="p-10 absolute flex items-end justify-end">
          <p className="text-navy-blue text-md md:text-lg font-extrabold tracking-tighter w-1/2 text-right md:text-left pt-0 md:pt-6">
            {quote}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="md:px-32 relative my-20 px-5 bg-brand-bg">
      <motion.h1
        className="relative text-3xl md:text-5xl font-bold font-neue text-navy-blue tracking-tighter text-center md:leading-snug md:mx-auto mb-12 leading-snug"
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
        A Message from our
        <span className="bg-primary-light px-2 pt-2 text-navy-blue rounded-2xl font-neue md:mx-4 flex-nowrap mx-2">
          Presidents
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-8"
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
        {presidents.map((president) => (
          <QuoteCard key={president.name} data={president} />
        ))}
      </motion.div>
    </div>
  );
}
