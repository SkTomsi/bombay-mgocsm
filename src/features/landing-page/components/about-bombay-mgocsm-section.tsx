import Image from "next/image";
import wave from "@/assets/images/wave.png";
import CrossIcon from "@/assets/images/Cross.svg";
import HandsIcon from "@/assets/images/Hands.svg";
import BookIcon from "@/assets/images/Book.svg";
import { cn } from "@/lib/utils";
import Bombay from "@/assets/images/mumbai.svg";

export default function About() {
  const GridItem = ({
    className,
    children,
  }: {
    className?: string;
    children?: React.ReactNode;
  }) => {
    return (
      <div
        className={`w-full lg:h-full min-h-[180px] md:h-full rounded-3xl flex items-center justify-center ${
          className ? className : ""
        }`}
      >
        {children}
      </div>
    );
  };

  const ZonePill = ({
    className,
    children,
  }: {
    className?: string;
    children?: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          "bg-mgocsm-orange text-white w-fit h-fit rounded-full p-1 px-5 text-lg md:text-xl font-medium",
          className
        )}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="md:my-20 my-10 h-full">
      <div className="relative">
        <Image
          src={wave}
          alt="wave"
          className="object-contain absolute md:-top-[70%] md:z-0 md:left-0 w-full"
        />
        <h1 className="relative z-10 text-3xl md:text-4xl font-bold font-neue text-navy-blue tracking-tighter text-center md:leading-snug md:w-[60%] md:mx-auto px-">
          Rooted in
          <span className="bg-primary-light px-2 pt-2 text-navy-blue rounded-2xl font-neue md:mx-4 flex-nowrap">
            Orthodox wisdom
          </span>
          , branching into modern challenges
        </h1>
      </div>
      <div className="px-5 md:px-32 md:mt-20 mt-12">
        <div className=" flex flex-col lg:grid gap-6 lg:grid-cols-9 lg:grid-rows-9 tracking-tighter">
          <GridItem className="bg-[#FCECC7] col-span-3 row-span-3">
            <div className="flex gap-x-3 items-center">
              <Image
                src={CrossIcon}
                alt="cross"
                className="md:h-24 h-10 object-contain"
              />
              <p className="font-neue text-3xl font-bold text-brand-yellow">
                Worship
              </p>
            </div>
          </GridItem>
          <GridItem className="bg-[#EDF1ED] col-span-3 row-span-3">
            <div className="flex gap-x-3 items-center">
              <Image
                src={BookIcon}
                alt="Book"
                className="md:h-24 h-10 object-contain"
              />
              <p className="font-neue text-3xl font-bold text-navy-blue">
                Study
              </p>
            </div>
          </GridItem>
          <GridItem className="bg-[#FFDAC5] col-span-3 row-span-3">
            <div className="flex gap-x-3 items-center">
              <Image
                src={HandsIcon}
                alt="Book"
                className="md:h-24 h-10 object-contain"
              />
              <p className="font-neue text-3xl font-bold text-mgocsm-orange">
                Service
              </p>
            </div>
          </GridItem>
          <GridItem className="bg-[#EDF1ED] col-span-5 row-span-3 flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden relative gap-y-5 md:p-6">
            <p className="text-3xl font-neue font-bold text-navy-blue md:w-fit md:h-full">
              #Zones
            </p>
            <div className="flex gap-x-3 gap-y-2 flex-wrap mt-2 items-center justify-end md:h-full md:mt-10 md:w-[70%]">
              <ZonePill className="bg-navy-blue border border-black -rotate-6">
                Vashi
              </ZonePill>
              <ZonePill className="bg-brand-yellow border border-black">
                Pune
              </ZonePill>
              <ZonePill className="bg-mgocsm-orange border border-black rotate-[28deg]">
                Malad
              </ZonePill>
              <ZonePill className="bg-navy-blue border border-black -rotate-[16deg] transform translate-y-2">
                Dadar
              </ZonePill>
              <ZonePill className="bg-mgocsm-orange border border-black -rotate-[12deg] transform -translate-y-2">
                Kalyan
              </ZonePill>
              <ZonePill className="bg-navy-blue border border-black rotate-[8deg] transform -translate-y-2">
                Surat
              </ZonePill>
              <ZonePill className="bg-brand-yellow border border-black">
                Nashik
              </ZonePill>
            </div>
          </GridItem>
          <GridItem className="bg-[#FDEDDC] col-span-4 row-span-6 p-10 flex flex-col items-center justify-center gap-y-2">
            <p className="text-lg md:text-2xl font-medium">We are,</p>

            <Image
              src={Bombay}
              alt="Bombay"
              className="object-contain h-full"
            />
            <p className="text-lg md:text-4xl font-bold font-neue">
              MGOCSM
            </p>
          </GridItem>
          <GridItem className="bg-[#FCECC7] col-span-2 row-span-3 flex items-center justify-between w-full">
            <div className="flex md:flex-col items-center justify-center gap-2 font-neue text-3xl font-bold text-brand-yellow w-full ">
              <p>20</p>
              <p>Parishes</p>
            </div>
          </GridItem>
          <GridItem className="bg-[#FFDAC5] col-span-3 row-span-3">
            <div className="flex md:flex-col items-center justify-center gap-2 font-neue text-3xl font-bold text-mgocsm-orange">
              <p>400+</p>
              <p>Members</p>
            </div>
          </GridItem>
        </div>
      </div>
    </div>
  );
}
