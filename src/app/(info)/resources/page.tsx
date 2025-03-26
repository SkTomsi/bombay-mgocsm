import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { KUKILION, LITURGICAL_TONES } from "@/lib/constants";
import { Info } from "lucide-react";

export default function Page() {
	return (
		<div className=" w-full min-h-screen flex flex-col px-5 gap-10 py-28 lg:max-w-[1400px] lg:mx-auto lg:w-full">
			<div className="flex flex-col gap-2 bg-primary-light px-5 py-8 rounded-3xl">
				<h1 className="text-4xl tracking-tighter font-neue text-navy-blue">
					Resources
				</h1>

				<p className="text-xl text-gray-600 dark:text-gray-400 tracking-tight">
					Curated Resources by Bombay MGOCSM
				</p>
			</div>
			<div className="flex flex-col gap-4  bg-primary-light/20 rounded-xl p-5">
				<div className="flex items-start gap-3 w-full">
					<Info className="w-8 h-8 mt-1" />
					<div className="flex flex-col gap-1 w-full">
						<h3 className="text-2xl font-bold tracking-tight">
							Introduction to Liturgical Tones
						</h3>
						<p>- by Rev. Fr. Skaria Thomas (Siby Achen)</p>
						{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
						<audio
							controls
							src={"/audios/Intro-audio.mp3"}
							className="w-full mt-5"
						/>
					</div>
				</div>
			</div>
			<p className="text-3xl tracking-tight font-bold">Liturgical Tones</p>
			<div className="flex flex-col gap-4 lg:px-10">
				<p className="text-2xl tracking-tight font-bold">Boovoso</p>
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger>
							1. Boovoso of Mar Aprem
						</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-4 lg:grid lg:grid-cols-4">
							{LITURGICAL_TONES["category-1"].map((tone) => (
								<Card key={tone.id} className="p-4">
									<div className="flex flex-col gap-4">
										<p className="text-base font-medium tracking-tight">
											Tone {tone.id}
										</p>
										{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
										<audio
											controls
											src={tone.audio}
											className="w-full bg-white"
											style={{ backgroundColor: "white" }}
										/>
									</div>
								</Card>
							))}
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>
							2. Boovoso of Mar Balai
						</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-4 lg:grid lg:grid-cols-4">
							{LITURGICAL_TONES["category-2"].map((tone) => (
								<Card key={tone.id} className="p-4">
									<div className="flex flex-col gap-4">
										<p className="text-base font-medium tracking-tight">
											Tone {tone.id}
										</p>
										{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
										<audio
											controls
											src={tone.audio}
											className="w-full bg-white"
											style={{ backgroundColor: "white" }}
										/>
									</div>
								</Card>
							))}
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>
							3. Boovoso of Mar Yakob
						</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-4 lg:grid lg:grid-cols-4">
							{LITURGICAL_TONES["category-3"].map((tone) => (
								<Card key={tone.id} className="p-4">
									<div className="flex flex-col gap-4">
										<p className="text-base font-medium tracking-tight">
											Tone {tone.id}
										</p>
										{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
										<audio
											controls
											src={tone.audio}
											className="w-full bg-white"
											style={{ backgroundColor: "white" }}
										/>
									</div>
								</Card>
							))}
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
			<div className="flex flex-col gap-4 lg:px-10">
				<p className="text-2xl tracking-tight font-bold">Kukilion</p>
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger>1. Pethgomo</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-4 lg:grid lg:grid-cols-4">
							{KUKILION.pethgomo.map((tone) => (
								<Card key={tone.id} className="p-4">
									<div className="flex flex-col gap-4">
										<p className="text-base font-medium tracking-tight">
											Tone {tone.id}
										</p>
										{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
										<audio
											controls
											src={tone.audio}
											className="w-full bg-white"
											style={{ backgroundColor: "white" }}
										/>
									</div>
								</Card>
							))}
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>2. Ekbo</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-4 lg:grid lg:grid-cols-4">
							{KUKILION.ekbo.map((tone) => (
								<Card key={tone.id} className="p-4">
									<div className="flex flex-col gap-4">
										<p className="text-base font-medium tracking-tight">
											Tone {tone.id}
										</p>
										{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
										<audio
											controls
											src={tone.audio}
											className="w-full bg-white"
											style={{ backgroundColor: "white" }}
										/>
									</div>
								</Card>
							))}
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
