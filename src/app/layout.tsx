import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shared/top-navbar";
import Footer from "@/features/landing-page/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { Crimson_Text } from "next/font/google";

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
					<Header />
					{children}
					<Footer />
					<Analytics />
				</main>
			</body>
		</html>
	);
}
