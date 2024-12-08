"use client";

import { IMAGES } from "@/assets";
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { CustomButton } from "./CustomButtom";

export function EventGrid() {
  const EventCard = ({
    images,
    eventName,
    subTitle,
    date,
    place,
    buttonText,
    buttonLink,
  }: {
    images: StaticImageData;
    eventName: string;
    subTitle?: string;
    date: string;
    place: string;
    buttonText?: string;
    buttonLink?: string;
  }) => {
    return (
      <div className="bg-[#FFF4D4] border border-brand-yellow flex items-start justify-start rounded-2xl w-full p-4 gap-4 h-48 md:h-auto md:min-w-[80%] md:max-w-[80%] md:gap-12">
        <div className="aspect-square md:aspect-video h-full object-cover rounded-xl overflow-hidden border border-white shadow-lg">
          <Image
            src={images}
            alt="Event 1"
            className="w-full h-full object-cover rounded-lg "
          />
        </div>
        <div className="flex flex-col tracking-tighter justify-between h-full py-2 w-full">
          <div>
            <h1 className="md:text-3xl text-xl font-bold font-neue text-navy-blue">
              {eventName}
            </h1>
            <p className="text-sm md:text-xl font-neue text-navy-blue">
              {subTitle}
            </p>
            <p className="text-sm hidden md:inline-block font-semibold text-navy-blue">
              Bombay MGOCSM
            </p>
          </div>
          <div>
            <p className="text-sm md:text-xl font-semibold text-navy-blue">
              {date}
            </p>
            <p className="text-sm md:text-xl font-semibold text-navy-blue">
              {place}
            </p>
          </div>
          {buttonLink && buttonText && (
            <Link href={buttonLink}>
              <CustomButton text={buttonText} className="w-full md:w-fit" />
            </Link>
          )}
        </div>
      </div>
    );
  };

  const events = [
    {
      id: 2,
      image: IMAGES.aura,
      title: "Aura 2024",
      date: "8th Decemeber, 2024",
      location: "St.Thomas Orthodox Syrian Valiyapally, Malad",
      buttonText: "Watch Live",
      buttonLink: "https://www.youtube.com/watch?v=jcUWDhTSjBY",
    },
    {
      id: 1,
      image: IMAGES.kratos24,
      title: "Kratos 24",
      subtitle: "Annual Conference",
      date: "11th - 13th Oct, 2024",
      location: "Gregorian Community, Roha",
    },
  ];

  return (
    <motion.div
      className="md:flex-row flex flex-col gap-10 w-full md:justify-start overflow-auto py-5 md:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] no-scrollbar lg:px-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.6,
        duration: 0.8,
        type: "spring",
        damping: 40,
        stiffness: 100,
      }}
      viewport={{ once: true }}
    >
      {events.map((event) => (
        <EventCard
          key={event.id}
          images={event.image}
          eventName={event.title}
          subTitle={event.subtitle}
          date={event.date}
          place={event.location}
          buttonText={event.buttonText}
          buttonLink={event.buttonLink}
        />
      ))}
    </motion.div>
  );
}
