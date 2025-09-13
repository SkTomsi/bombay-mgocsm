import { IMAGES } from "@/assets";
import { StaticImageData } from "next/image";

interface Event {
  image: StaticImageData;
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  buttonText?: string;
  id: number;
  buttonLink?: string;
  highlight?: boolean;
  isLive?: boolean
}

export const events: Array<Event> = [
  {
    title: "117th Annual Conference",
    subtitle: "Global Conference",
    date: "17th - 20th Oct, 2025",
    location: "Gregorian Community, Roha",
    buttonText: "Register Now",
    buttonLink: "events/117th-annual-conference",
    image: IMAGES.ac2025,
    isLive: true
  },
  {
    image: IMAGES.aura,
    title: "Aura 2024",
    date: "8th Decemeber, 2024",
    location: "St.Thomas Orthodox Syrian Valiyapally, Malad",
    buttonText: "Watch Live",
    buttonLink: "https://www.youtube.com/watch?v=jcUWDhTSjBY",
  },
  {
    image: IMAGES.kratos24,
    title: "Kratos 24",
    subtitle: "Annual Conference",
    date: "11th - 13th Oct, 2024",
    location: "Gregorian Community, Roha",
  },
].map((e, i) => ({
  ...e,
  id: i + 1,
}));


