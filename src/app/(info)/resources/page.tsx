import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { LITURGICAL_TONES } from "@/lib/constants";

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
      <div className="flex flex-col gap-4 lg:px-10">
        <p className="text-2xl tracking-tight font-bold">Liturgical Tones</p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Category 1 - Boovoso of Mar Aprem
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 lg:grid lg:grid-cols-4">
              {LITURGICAL_TONES["category-1"].map((tone) => (
                <Card key={tone.id} className="p-4">
                  <div className="flex flex-col gap-4">
                    <p className="text-base font-medium tracking-tight">
                      Tone {tone.id}
                    </p>
                    <audio
                      controls
                      src={tone.audio}
                      className="w-full bg-white"
                      style={{ backgroundColor: "white" }}
                    ></audio>
                  </div>
                </Card>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Category 2 - Boovoso of Mar Balai
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 lg:grid lg:grid-cols-4">
              {LITURGICAL_TONES["category-2"].map((tone) => (
                <Card key={tone.id} className="p-4">
                  <div className="flex flex-col gap-4">
                    <p className="text-base font-medium tracking-tight">
                      Tone {tone.id}
                    </p>
                    <audio
                      controls
                      src={tone.audio}
                      className="w-full bg-white"
                      style={{ backgroundColor: "white" }}
                    ></audio>
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
