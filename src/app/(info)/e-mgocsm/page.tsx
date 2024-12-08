import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
	return (
		<div className="w-full min-h-screen flex flex-col px-5 gap-10 py-28 lg:max-w-[1400px] lg:mx-auto lg:w-full">
			<div className="flex  gap-2 bg-primary-light/20 border border-primary-light px-5 py-8 rounded-3xl justify-between items-center">
				<div>
					<h1 className="text-4xl tracking-tighter font-neue text-mgocsm-orange">
						E-MGOCSM
					</h1>

					<p className="text-xl text-gray-600 dark:text-gray-400 tracking-tight">
						E-MGOCSM is an online initiative of MGOCSM
					</p>
				</div>
				<Link
					href={
						"https://docs.google.com/forms/d/e/1FAIpQLScw1v-IVfd983Kun8c4ksH6Xsf4fSuLWdWPmFhbwFEeMp5RcQ/viewform?usp=sf_link"
					}
					referrerPolicy="no-referrer"
					target="_blank"
				>
					<Button>Register Now</Button>
				</Link>
			</div>
			<div className="flex flex-col gap-4 lg:items-center lg:w-full">
				<p className="text-lg font-bold tracking-tight">
					Watch the E-MGOCSM introductory video
				</p>

				<div className="aspect-video p-2 border border-brand-yellow rounded-2xl bg-brand-yellow/10 w-full">
					{/* biome-ignore lint/a11y/useIframeTitle: <explanation> */}
					<iframe
						className="w-full h-full rounded-xl"
						src="https://www.youtube.com/embed/c1Uty2LsKiY?si=ck-FJS286lMeGtOV"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
			</div>
		</div>
	);
}
