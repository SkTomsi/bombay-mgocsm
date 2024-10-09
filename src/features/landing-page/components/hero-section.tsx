import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";
import { CustomButton } from "./CustomButtom";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-items-center gap-4 relative w-full text-center pb-10 md:pb-30">
      <div className="-z-20 bg-[url('/blue-bg.webp')] bg-no-repeat absolute bg-cover max-sm:bg-center inset-0 top-[50%] md:top-80" />
      <div className="absolute inset-0 -z-30 bg-[url('/contour.png')] bg-cover bg-center opacity-20 [mask-image:linear-gradient(to_top,transparent,black_20%,black_80%,transparent)]" />

      <div className="hidden lg:block">
        <Image
          src={IMAGES["worship"]}
          alt="worship"
          className="h-48 object-contain absolute top-32 right-20 w-fit"
        />
        <Image
          src={IMAGES["service"]}
          alt="worship"
          className="h-48 object-contain absolute top-[30%] w-fit right-[17%]"
        />
        <Image
          src={IMAGES["study"]}
          alt="worship"
          className="h-32 object-contain absolute top-32 left-20 w-fit"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full md:max-w-7xl mx-auto px-5 pt-20">
        <div className="w-full h-full relative z-10 items-center flex justify-center flex-col ">
          <p className="tracking-tight  border border-brand-yellow rounded-full px-5 w-fit bg-[#FDF3D4] mb-4 font-medium text-md">
            MGOCSM - DIOCESE OF BOMBAY
          </p>
          <h1 className="text-[35px] md:text-[56px] font-bold font-crimson tracking-tighter text-brand-yellow text-center leading-relaxed md:leading-normal text-balance w-full">
            What does it mean to be <br className="md:inline-block hidden" /> an
            <br className="inline-block md:hidden" />
            <span className="bg-primary-light px-2 pt-2 text-navy-blue rounded-2xl font-neue md:mx-4">
              Orthodox Christian <br className="inline-block md:hidden" />
            </span>
            youth in <br className="hidden md:block" />
            <span className="text-navy-blue rounded-2xl font-neue mx-4">
              मुंबई
            </span>
            Today?
          </h1>
        </div>
        <div className="relative z-10 flex items-center justify-center px-5 mt-6">
          <p className="tracking-tighter text-base md:text-lg md:w-[70%] text-center">
            At Bombay MGOCSM, we explore our faith, embrace our culture, and
            empower each other to make a difference.
          </p>
        </div>
        <div className="mt-4 px-5">
          <CustomButton text="Explore our Community" />
        </div>
        <div className="my-20 w-full bg-primary-light/20 p-2 rounded-xl md:rounded-3xl border-dashed border-brand-yellow/40 border-2 shadow-2xl">
          <Image
            src={IMAGES["group-photo"]}
            alt="group-photo"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
