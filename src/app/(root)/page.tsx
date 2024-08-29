import { Intro } from "./components/intro";
import { Calendar } from "./components/calendar";

export default function HomePage() {
  return(
    <main>
      <Intro />
      <Calendar />
    </main>
  );
}