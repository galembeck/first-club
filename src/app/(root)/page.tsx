import { Intro } from "./components/intro";
import { Calendar } from "./components/calendar";
import { OlympicClubs } from "./components/olympic-clubs";
import { Testimonials } from "./components/testimonials";

export default function HomePage() {
  return(
    <main>
      <Intro />
      <Calendar />
      <OlympicClubs />
      <Testimonials />
    </main>
  );
}