import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { IMAGES } from "@/assets";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <Image
              src={IMAGES.logo}
              alt="Logo"
              className="h-40 object-contain"
            />
          </div>
          <div className="flex space-x-4 text-white">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-800"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-800"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
