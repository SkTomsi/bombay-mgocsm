import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { IMAGES } from "@/assets";
import Link from "next/link";
import { CustomButton } from "@/features/landing-page/components/CustomButtom";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full ">
      <div className="fixed top-0 w-full p-4 flex items-center justify-between z-40 bg-brand-bg px-10">
        <Image
          src={IMAGES.logo}
          alt="logo"
          className="h-10 object-contain w-fit"
        />
        <nav className="hidden md:flex gap-x-4 ">
          <Link href="/" className="hover:underline">
            About Us
          </Link>
          <Link href="/" className="hover:underline">
            Units
          </Link>
          <Link href="/" className="hover:underline">
            Publications
          </Link>
          <Link href="/" className="hover:underline">
            Our Faith
          </Link>
        </nav>
        <div className="hidden md:flex">
          <CustomButton text="Register" />
        </div>
        <div className="md:hidden">
          <MenuIcon />
        </div>
      </div>
    </header>
  );
}
