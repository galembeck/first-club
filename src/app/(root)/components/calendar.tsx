import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";

export function Calendar() {
  return(
    <section id="olympic-calendar" className="flex flex-col items-center gap-5 scroll-mt-32 mb-20">
      <h1 className="text-center text-2xl md:text-5xl font-extrabold">
        Choose your <span className="text-blue-900">Olympic Club</span>
        <br />
        and receive a calendar
      </h1>

      <p className="text-center text-lg font-light text-white/70">
        Join over 300 firsters from the Federal Institute of Alagoas
        <br />
        and let`s explore the world together.
      </p>

      <Button className="flex items-center justify-evenly px-5 w-40 h-8 bg-blue-950 hover:bg-blue-950/70 text-white hover:text-white/70 rounded-full">
        Subscribe
        <ArrowRight className="w-4" />
      </Button>
    </section>
  );
}