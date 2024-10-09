import { IMAGES } from "@/assets";
import Image from "next/image";

export default function History() {
  return (
    <div className="md:my-20 my-10 px-5 md:px-32 relative overflow-hidden">
      <h1 className="relative text-3xl md:text-4xl font-bold font-neue text-navy-blue tracking-tighter text-center md:leading-snug md:w-[60%] md:mx-auto mb-12">
        Our
        <span className="bg-primary-light px-2 pt-2 text-navy-blue rounded-2xl font-neue md:mx-4 flex-nowrap mx-2">
          History
        </span>
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:justify-start md:pt-6">
        <div className="overflow-hidden rounded-3xl border-2 border-dashed border-brand-yellow p-1 md:flex-grow md:max-w-[40%]">
          <Image
            src={IMAGES.parumalaThirumeni}
            alt="Parumala Thirumeni"
            className="w-full object-contain rounded-2xl"
          />
        </div>
        <div className="md:flex-1 ">
          <div className="tracking-tighter flex flex-col gap-4 px-3">
            <h1 className="md:text-5xl text-4xl font-bold font-crimson text-black">
              Mar Gregorios Orthodox Christian Student Movement
            </h1>
            <p className="text-lg font-bold text-navy-blue">
              MGOCSM, the 1st Spiritual sapling for students in Asia, is the
              spiritual organization of the Malankara Orthodox SyrianChurch for
              its Student Community.
            </p>
            <p className="text-base md:text-md text-black/80 font-medium tracking-normal">
              This spiritual organisation for the students was the laudable
              initiative of the Senior Leaders and students of our Church, in
              Madras, in the early part of the 20th century. The organization
              was founded on the basis of intense yearning for true spiritual
              progress for the youth along with an ardent spirit of Christian
              fellowship. The Organization was formed in 1907 as Syrian Student
              Conference. The first conference of the Movement was held at
              Madras on the 1st of January 1908.
            </p>
          </div>
        </div>
        <Image
          src={IMAGES.waveBackground}
          alt="Wave Background"
          className="absolute -z-10 opacity-10 w-full object-contain min-w-full"
        />
      </div>
    </div>
  );
}
