"use client";

import Image from "next/image";

import { aboutTopics } from "@/constants/data";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

type AboutTopicsProps = (typeof aboutTopics)[number] & {
  index: number;
};

export const AboutTopics: React.FC<AboutTopicsProps> = ({ title, description, image, link, index }) => {
  return (
    <motion.div
      className={`flex w-full justify-center gap-4 py-6 sm:gap-0 sm:justify-evenly items-center 
        ${index === 1 ? "flex-row-reverse" : ""}
      `}
    >
      <div className="flex flex-col gap-5">
        <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-neutral-200">
          {title}
        </h3>

        <p className="font-bold flex text-gray-600 max-w-[200px] md:max-w-[350px] lg:max-w-[500px] text-xs md:text-sm lg:text-base">
          {description}
        </p>
        <p className="flex text-xs md:text-sm items-center gap-4">
          {link}
          <ArrowRight />
        </p>
      </div>
      <Image
        src={image}
        alt="Background images for each topic in the about section"
        className="size-32 md:size-44 lg:size-80"
      ></Image>
    </motion.div>
  );
};