import Image from "next/image";
import thirumeni from "@/assets/images/thirumeni.png";

export default function Presidents() {
  return (
    <div className="md:px-32 relative my-20 px-5">
      <h1 className="relative text-3xl md:text-4xl font-bold font-neue text-navy-blue tracking-tighter text-center md:leading-snug md:w-[60%] md:mx-auto mb-12 leading-snug">
        A Message from our
        <span className="bg-primary-light px-2 pt-2 text-navy-blue rounded-2xl font-neue md:mx-4 flex-nowrap mx-2">
          Presidents
        </span>
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {[1, 2].map((index) => (
          <div
            key={index}
            className="bg-[#F0F3ED] flex rounded-3xl h-[463px] w-full overflow-hidden relative"
          >
            <div className="flex-grow relative">
              <Image
                src={thirumeni}
                alt={`President ${index}`}
                className="h-[80%] md:h-full w-fit object-contain absolute md:-bottom-[7%] bottom-0 left-0"
              />
            </div>
            <div className="p-10 absolute flex items-end justify-end">
              <p className="text-navy-blue text-md md:text-lg font-extrabold tracking-tighter w-1/2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                gravida, elit eu interdum pellentesque, mi eros porta ligula, in
                finibus eros massa sit amet quam. Fusce cursus varius porttitor.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
