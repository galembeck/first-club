import { Intro } from "./components/intro";
import { Calendar } from "./components/calendar";
import { OlympicClubs } from "./components/olympic-clubs";
import { Testimonials } from "./components/testimonials";

import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return(
    <main>
      <Intro />
      <Calendar />
      <OlympicClubs />
      <div>
        <h1 className="text-center text-3xl font-bold uppercase pt-36 pb-8">
          Testimonials
        </h1>
        <Separator className="flex w-[430px] ml-[415px] mb-12" />
        <Testimonials />
      </div>
    </main>
  );
}