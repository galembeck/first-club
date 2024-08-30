import { testimonials } from "@/lib/data"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Info } from "lucide-react";

type TestimonialCardProps = (typeof testimonials)[number];

const TestimonialCard: React.FC<TestimonialCardProps> = ({ icon, title, content }) => {
  return(
    <div className="flex flex-col gap-4 w-11/12 max-w-96 rounded-xl bg-gray-900 p-5 mb-24">
      <div className="flex justify-between">
        <div className="flex flex-row gap-2">
          <Avatar>
            <AvatarImage 
              src={icon}
              alt="User avatar, which is used in the testimonials section" 
            />
            <AvatarFallback>FC</AvatarFallback>
          </Avatar>
          <h3 className=" mt-2 text-xl font-medium text-white h-[64px]">• {title}</h3>
        </div>

        <Info className="mt-2 mr-2" />
      </div>

      <p className="-mt-6 text-white/50 text-center">{content}</p>
    </div>
  );
}

export { TestimonialCard }