import { Intro } from "@/components/pages/home/intro";
import { Calendar } from "@/components/pages/home/calendar";
import { OlympicClubs } from "@/components/pages/home/olympic-clubs";
import { About } from "@/components/pages/home/about";
import { Testimonials } from "@/components/pages/home/testimonials";

import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <Intro />
      <Calendar />
      <OlympicClubs />
      <div>
        <h1 className="text-center text-3xl font-bungeeInline font-medium text-gradient uppercase pt-44">
          About us
        </h1>
        <Separator className="flex w-[430px] ml-[415px] lg:ml-[545px] sm:ml-[175px] mt-8" />
        <About />
      </div>
      <div>
        <h1 className="text-center text-3xl font-bungeeInline font-medium text-gradient uppercase pt-36 pb-8">
          Testimonials
        </h1>
        <Separator className="flex w-[430px] ml-[415px] lg:ml-[545px] sm:ml-[175px] mb-12" />
        <Testimonials />
      </div>
    </main>
  );
}
