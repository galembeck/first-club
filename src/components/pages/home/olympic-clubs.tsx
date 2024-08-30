"use client";

import { ClubsCard } from "@/components/global/clubs-card";

import { clubsCardsData } from "@/constants/data";

export function OlympicClubs() {
  return(
    <section id="olympic-clubs" className="flex flex-wrap justify-center items-center gap-10 scroll-mt-32 mt-20">
      {clubsCardsData.map((card, index) => (
        <ClubsCard 
          key={index} 
          {...card}
          isMiddle={index}
        />
      ))}
    </section>
  );
}