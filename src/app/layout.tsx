import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Crimson_Text } from "next/font/google";
import { IMAGES } from "@/assets";
import Link from "next/link";
import { CustomButton } from "@/features/landing-page/components/CustomButtom";

const satoshi = localFont({
  src: "../assets/fonts/Satoshi-Variable.ttf",
  display: "swap",
  variable: "--font-satoshi",
});

const neue = localFont({
  src: "../assets/fonts/neue-gravica-bold.ttf",
  display: "swap",
  variable: "--font-neue",
});

export const metadata: Metadata = {
  icons: "/Logo.png",
  metadataBase: new URL("https://bombay-mgocsm.vercel.app/"),
  title: "Bombay MGOCSM",
  description: "This is the official website of Bombay MGOCSM",
  creator: "Tomcy Thomas",
  authors: [{ name: "Tomcy Thomas", url: "https://hello-sktomsi.vercel.app/" }],
  publisher: "Tomcy Thomas",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Bombay MGOCSM",
    "MGOCSM",
    "Bombay",
    "Orthodox Church",
    "Malankara",
    "Malankara Orthodox Syrian Church",
    "Malankara Orthodox Church",
    "MGOCSM.in",
    "Parumala Thirumeni",
    "Bombay MGOCSM",
  ],
  openGraph: {
    title: "Bombay MGOCSM",
    description: "Offical Website of Bombay MGOCSM",
    url: "https://bombay-mgocsm.vercel.app/",
    siteName: "Bombay MGOCSM",
    images: [
      {
        url: "https://bombay-mgocsm.vercel.app/og-image.png",
        alt: "This is the official website of Bombay MGOCSM",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    images: "https://bombay-mgocsm.vercel.app/og-image.png",
  },
};

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson-text",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonText.variable} ${satoshi.className} ${neue.variable} antialiased bg-brand-bg`}
      >
        <main className="flex flex-col min-h-screen relative">
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
          {children}
        </main>
      </body>
    </html>
  );
}
