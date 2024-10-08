import { IMAGES } from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen gap-4 relative w-full text-center">
      <div className="-z-20 bg-[url('/blue-bg.png')] bg-no-repeat absolute bg-cover max-sm:bg-center inset-0 top-96 w-full" />
      <div className="absolute inset-0 -z-10 bg-[url('/contour.png')] bg-cover bg-center opacity-20" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-5 pt-32">
        <div className="p-2 rounded-2xl w-full h-full relative z-10 px-5">
          <h1 className="text-[33px] md:text-[56px] font-bold font-crimson tracking-tighter text-brand-yellow text-center leading-relaxed md:leading-normal text-balance w-full">
            What does it mean to be an <br />
            <span className="bg-primary-light p-2 text-navy-blue rounded-2xl font-neue md:mx-4">
              Orthodox Christian
            </span>
            youth in <br />
            <span className="text-navy-blue rounded-2xl font-neue mx-4">
              मुंबई
            </span>
            Today?
          </h1>
        </div>
        <div className="relative z-10 flex items-center justify-center px-5">
          <p className="tracking-tighter text-lg md:w-[70%] text-center">
            At Bombay MGOCSM, we explore our faith, embrace our culture, and
            empower each other to make a difference.
          </p>
        </div>
        <div className="mt-4 px-5">
          <Button className="bg-navy-blue text-white font-crimson font-bold text-md shadow-brand-yellow">
            Explore our Community
          </Button>
        </div>
        <div className="my-20 w-full">
          <Image
            src={IMAGES["group-photo"]}
            alt="group-photo"
            className="w-full md:w-[90%] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
