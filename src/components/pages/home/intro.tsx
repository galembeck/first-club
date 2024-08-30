"use client";

import Link from 'next/link';

import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

import ChessIcon from '../../../assets/icons/chess.svg';
import AstronomyIcon from '../../../assets/icons/astronomy.svg';
import MedalIcon from '../../../assets/icons/medal.svg';

export function Intro() {
  return(
    <section 
      id="home" 
      className="relative flex flex-col w-screen h-screen lg:h-[1000px] items-center justify-center gap-5 -mt-56"
    >
      <div className="bg-[#7063d7] absolute top-[22rem] -z-10 right-[48rem] h-[15rem] w-[15rem] rounded-full blur-[10rem] sm:w-[20rem] dark:bg-[#946263]" />
      <div className="bg-[#214b97] absolute top-[22rem] -z-10 right-[23rem] h-[15rem] w-[15rem] rounded-full blur-[10rem] sm:w-[20rem] dark:bg-[#676394]" />
      
      <div className="flex gap-8 md:gap-20">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <ChessIcon />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <AstronomyIcon />
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="grid place-items-center"
        >
          <MedalIcon />
        </motion.div>
      </div>

      <h1 className="text-gradient font-bungeeInline text-4xl md:text-6xl">#Be F1rst</h1>
      <h2 className="text-gradient font-alfaSlabOne text-2xl md:text-4xl text-center">One club, three big projects</h2>

      <div className="flex items-center gap-6 mt-4 md:mt-8">
        <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <Button className="w-auto h-auto bg-white rounded-xl text-black font-bold px-4 py-2 text-xs md:text-sm hover:bg-white/70">
            <Link href="/#olympic-clubs">
              Become a firster
            </Link>
          </Button>
        </motion.div>
        <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <Button className="w-auto h-auto bg-gray-950 rounded-xl text-white font-bold px-4 py-[10px] text-xs md:text-sm hover:bg-gray-950/70">
            <Link href="/#testimonials" passHref>
              Learn more
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}