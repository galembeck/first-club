import Image from "next/image";

import { motion } from "framer-motion";

import { clubsCardsData } from "@/lib/data"

import { Separator } from "./ui/separator";

import whiteCheckImage from "../assets/images/white-check.png";
import coloredCheckImage from "../assets/images/colored-check.png";

type ClubsCardProps = (typeof clubsCardsData)[number] & {
  isMiddle?: number;
}

const ClubsCard: React.FC<ClubsCardProps> = ({ title, description, items, isMiddle }) => {
  return(
    <motion.div
      className={`relative flex flex-col items-center bg-gray-900 rounded-lg p-6
        ${isMiddle === 1 ? "h-[530px] w-[340px] gradient-border" : "z-10 h-[480px] w-80"}  
      `}
      whileHover={{
        scale: 1.05,
        y: isMiddle === 1 ? -10 : 0,
        rotate: isMiddle === 1 ? 0 : isMiddle === 0 ? 2 : -2,
      }}
    >
      <h3 className="text-3xl font-bold text-neutral-200">
        {title}
      </h3>

      <Separator className="my-4" />

      <p className="flex text-center text-xs text-white/50">
        {description}
      </p>

      <ul className="text-white/70 mt-6">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex items-center text-sm mb-5 gap-2
              ${isMiddle === 1 ? "text-[#56C2FF]" : ""}
            `}
          >
            <Image src={isMiddle === 1 ? coloredCheckImage : whiteCheckImage} alt="Check" />
            {item}
          </li>
        ))}
      </ul>

      <motion.button
        className="absolute bottom-10 w-60 bg-neutral-200 text-black py-1 px-4 rounded-lg"
        whileHover={{ scale: 1.1 }}
      >
        Join
      </motion.button>
    </motion.div>
  );
}

export { ClubsCard }