"use client";

import { IMAGES } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { CustomButton } from "./CustomButtom";
// import { FlipWords } from "@/components/ui/flip-words";

// const words = ["मुंबई", "Bombay", "മുംബൈ"];

export function Hero() {
	return (
		<div className="flex flex-col items-center justify-items-center gap-4 relative w-full text-center pb-10 md:pb-30 pt-4 md:pt-0">
			<motion.div className="-z-10 bg-[url('/blue-bg.webp')] bg-no-repeat absolute bg-cover max-sm:bg-center inset-0 top-[50%] md:top-80" />
			<div className="absolute inset-0 -z-20 bg-[url('/contour.png')] bg-cover bg-center opacity-20 [mask-image:linear-gradient(to_top,transparent,black_20%,black_80%,transparent)]" />
			<div className="h-full w-full absolute top-0 left-0 bg-brand-bg -z-30" />

			<motion.div className="hidden lg:flex animate-fadeIn">
				<Image
					src={IMAGES.worship}
					alt="worship"
					className="h-48 object-contain absolute top-32 right-20 w-fit animate-float"
				/>
				<Image
					src={IMAGES.service}
					alt="worship"
					className="h-48 object-contain absolute top-[30%] w-fit right-[17%] animate-float delay-1000"
				/>
				<Image
					src={IMAGES.study}
					alt="worship"
					className="h-32 object-contain absolute top-32 left-20 w-fit animate-float delay-1000"
				/>
			</motion.div>

			<div className="relative flex flex-col items-center justify-center w-full md:max-w-7xl mx-auto px-5 md:pt-20 pt-32">
				<div className="w-full h-full relative z-10 items-center flex justify-center flex-col ">
					<motion.p
						className="tracking-tight  border text-navy-blue border-brand-yellow rounded-full px-5 w-fit bg-[#FDF3D4] mb-4 font-medium text-md"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: 1.4,
							duration: 0.8,
							type: "spring",
							damping: 40,
							stiffness: 100,
						}}
					>
						MGOCSM - DIOCESE OF BOMBAY
						{/* <Image
							src={IMAGES["christmas-theme"].bells}
							alt="hat"
							className="md:hidden absolute w-14 h-14 -top-[4.3rem] left-1/2 transform -translate-x-1/2 -rotate-[2deg]"
						/> */}
					</motion.p>
					<motion.h1
						className="text-[35px] md:text-[56px] font-bold font-crimson tracking-tighter text-brand-yellow text-center leading-relaxed md:leading-normal text-balance w-full"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.2,
							duration: 0.8,
							type: "spring",
							damping: 40,
							stiffness: 100,
						}}
					>
						What does it mean to be <br className="md:inline-block hidden" /> an
						<br className="inline-block md:hidden" />
						<span className="bg-primary-light px-4 md:px-2 pt-2 text-navy-blue rounded-2xl font-neue md:mx-4 relative">
							Orthodox Christian <br className="inline-block md:hidden" />
							{/* <Image
								src={IMAGES["christmas-theme"].hat}
								alt="hat"
								className="hidden md:block absolute md:-top-9 md:-left-5 object-contain  md:w-[60px] md:h-[60px] -rotate-[2deg]"
							/>
							<Image
								src={IMAGES["christmas-theme"].bells}
								alt="hat"
								className="hidden md:block absolute  md:-bottom-9 md:-right-5 object-contain md:w-[60px] md:h-[60px] -rotate-[2deg]"
							/> */}
						</span>
						youth in <br className="hidden md:block" />
						<span className="text-navy-blue rounded-2xl font-crimson font-bold mx-4">
							{/* <FlipWords words={["मुंबई", "Bombay", "മുംബൈ"]} /> */}
							मुंबई
						</span>
						Today?
					</motion.h1>
				</div>
				<motion.div
					className="relative z-10 flex items-center justify-center px-5 mt-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.6,
						duration: 0.8,
						type: "spring",
						damping: 40,
						stiffness: 100,
					}}
				>
					<p className="tracking-tighter text-base md:text-lg md:w-[70%] text-center">
						At Bombay MGOCSM, we explore our faith, embrace our culture, and
						empower each other to make a difference.
					</p>
				</motion.div>
				<motion.div
					className="mt-4 px-5"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: 1.2,
						duration: 0.8,
						type: "spring",
						damping: 40,
						stiffness: 100,
					}}
				>
					<CustomButton text="Explore our Community" />
				</motion.div>
				<motion.div
					className="my-20 w-full bg-primary-light/20 p-2 rounded-xl md:rounded-3xl border-dashed border-brand-yellow/40 border-2 shadow-2xl"
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: 2,
						duration: 0.8,
						type: "spring",
						damping: 40,
						stiffness: 100,
					}}
				>
					<Image
						src={IMAGES["group-photo"]}
						alt="group-photo"
						className="w-full"
					/>
				</motion.div>
			</div>
		</div>
	);
}
