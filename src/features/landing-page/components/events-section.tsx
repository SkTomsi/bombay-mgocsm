import { EventGrid } from "./event-grid";

export function Events() {
  return (
    <div className="flex flex-col w-full md:gap-y-14 gap-y-12 px-5 md:px-32 pb-20">
      <h1 className="text-4xl md:text-4xl font-bold font-neue text-navy-blue tracking-tighter text-center">
        Our featured Events
      </h1>
      <EventGrid />
    </div>
  );
}
