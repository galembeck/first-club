import { testimonials } from "@/lib/data";

import { TestimonialCard } from "@/components/global/testimonial-card";

export function Testimonials() {
  return(
    <section id="testimonials" className="flex flex-wrap justify-center items-center gap-10">
      {testimonials.map((testimonials, index) => (
        <TestimonialCard 
          key={index} 
          {...testimonials} 
        />
      ))}
    </section>
  );
}