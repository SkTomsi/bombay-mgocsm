"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { CustomButton } from "./CustomButtom";
import { events } from "@/constants/events.constants";
import { cn } from "@/lib/utils";
import { HTMLProps } from "react";
import Link from "next/link";

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
    className?: HTMLProps<HTMLElement>["className"];
  }) => {
    return (
      <div
        className={cn(
          "bg-[#FFF4D4] border border-brand-yellow flex items-center justify-center rounded-2xl w-full p-4 gap-4 h-full md:h-full  md:gap-12"
        )}
      >
        <div className="h-full w-5/6 object-contain rounded-xl overflow-hidden border border-white shadow-lg">
          <Image
            src={images}
            alt={eventName}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 tracking-tighter justify-between h-full py-2 w-full ">
          <div>
            <h1 className="md:text-3xl text-xl font-bold font-neue text-navy-blue">
              {eventName}
            </h1>
            {subTitle && (
              <p className="text-sm md:text-xl font-neue text-navy-blue">
                {subTitle}
              </p>
            )}
            <p className="text-sm hidden md:inline-block font-semibold text-navy-blue">
              Bombay MGOCSM
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm md:text-base font-semibold text-navy-blue">
              {date}
            </p>
            <p className="text-sm md:text-base font-semibold text-navy-blue">
              {place}
            </p>
            {buttonLink && buttonText && (
              <a href={buttonLink}>
                <CustomButton
                  text={buttonText}
                  className="w-full md:w-fit mt-2"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Separate live vs previous events
  const liveEvents = events.filter((e) => e.isLive);
  const previousEvents = events.filter((e) => !e.isLive);

  return (
    <motion.div
      className="grid lg:grid-cols-2 grid-cols-1  w-full overflow-auto py-5 no-scrollbar lg:h-fit mx-auto max-w-8xl gap-5 "
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
      {/* Live Events */}
      {liveEvents.length > 0 && (
        <div
          key={liveEvents[0].id}
          className={cn(
            "bg-[#FFF4D4] border border-brand-yellow flex rounded-2xl w-full p-4 gap-4 h-fit md:h-full md:gap-8"
          )}
        >
          <div className="h-full md:w-full w-5/6 object-contain rounded-xl overflow-hidden border border-white shadow-lg">
            <Image
              src={liveEvents[0].image}
              alt={liveEvents[0].title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full md:flex-1 tracking-tighter gap-2 justify-between min-h-full md:py-2 ">
            <div>
              <h1 className="md:text-4xl text-xl font-bold font-neue text-navy-blue">
                {liveEvents[0].title}
              </h1>
              {liveEvents[0].subtitle && (
                <p className="text-sm md:text-xl font-neue text-navy-blue">
                  {liveEvents[0].subtitle}
                </p>
              )}
              <p className="text-sm hidden md:inline-block font-semibold text-navy-blue">
                Bombay MGOCSM
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm md:text-base font-semibold text-navy-blue">
                {liveEvents[0].date}
              </p>
              <p className="text-sm md:text-base font-semibold text-navy-blue">
                {liveEvents[0].location}
              </p>
              {liveEvents[0].buttonLink && liveEvents[0].buttonText && (
                <Link href={liveEvents[0].buttonLink}>
                  <CustomButton
                    text={liveEvents[0].buttonText}
                    className="w-full md:w-fit mt-2"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Previous Events */}
      {previousEvents.length > 0 && (
        <motion.div
          className="flex flex-col w-full  overflow-auto gap-5 md:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparen)] no-scrollbar"
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
          {previousEvents.map((event) => (
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
      )}
    </motion.div>
  );
}
