import { AboutTopics } from "@/components/global/about-topics";
import { aboutTopics } from "@/constants/data";

export function About() {
  return(
    <section id="about" className="w-full">
      <ul className="flex w-full flex-col justify-center items-center gap-20 md:gap-10 mt-40">
        {aboutTopics.map((item, index) => (
          <AboutTopics 
            key={index} 
            {...item} 
            index={index} 
          />
        ))}
      </ul>
    </section>
  );
}