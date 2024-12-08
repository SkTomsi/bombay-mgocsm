"use client";

import { IMAGES } from "@/assets";
import { CustomButton } from "@/features/landing-page/components/CustomButtom";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "About Us" },
    { href: "/", label: "Units" },
    { href: "/", label: "Publications" },
    { href: "/", label: "Our Faith" },
    { href: "/resources", label: "Resources" },
    { href: "/e-mgocsm", label: "E-MGOCSM" },
  ];

  return (
    <header className="flex items-center justify-between w-full">
      <div className="fixed top-0 w-full p-4 flex items-center justify-between z-40 bg-brand-bg px-10">
        <Link href="/">
          <Image
            src={IMAGES.logo}
            alt="logo"
            className="h-10 object-contain w-fit"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-x-4 text-base font-medium">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <CustomButton text="Register" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            onClick={toggleMobileMenu}
            variant={"ghost"}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {isMobileMenuOpen && (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleMobileMenu}
        >
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <Button
                onClick={toggleMobileMenu}
                className="text-black focus:outline-none"
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </Button>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-black hover:underline"
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <CustomButton text="Register" />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
