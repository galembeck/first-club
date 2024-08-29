import Link from "next/link";

import { Instagram, Linkedin, MessageCircle, Send, Slack } from "lucide-react";

export function Footer() {
  return(
    <footer className="sticky flex flex-col w-full py-5 items-center gap-5 text-white text-[10px] bg-slate-900">
      <div className="flex flex-wrap items-center justify-around px-4 sm:px-10 w-full h-full">
        <div className="flex 2xl:flex-col justify-between ml-6 sm:ml-0 gap-10 md:gap-20 h-full py-10">
          <div>
            <h1 className="font-bold text-2xl">#BeF1rst!</h1>
            <h2 className="text-zinc-400 font-semibold text-base">
              A whole new knowledge experience
            </h2>
          </div>

          <div>
            <h1 className="text-base max-w-52">
              Subscribe to receive our <span className="text-zinc-400">exclusive</span> news/updates.
            </h1>
            <div className="flex items-center justify-between mt-2 px-2 w-40 sm:w-64 h-8 rounded-md border-[1px] border-zinc-400">
              <p className="font-semibold text-xs text-zinc-400">galembeckpedro@gmail.com</p>
              <div className="w-6 h-5 rounded-md bg-zinc-600 grid place-items-center">
                <Send size={15} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 ml-6 sm:ml-0 gap-10 text-zinc-400 text-xs font-semibold">
          <div className="flex flex-col gap-3">
            <h1 className="text-base text-white">Our clubs</h1>
            <Link href="/#olympic-clubs">Chess</Link>
            <Link href="/#olympic-clubs">Astronomy</Link>
            <Link href="/#olympic-clubs">Olympics</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-base text-white">Ideals</h1>
            <Link href="/">Why do we do that?</Link>
            <Link href="/">What is our objective?</Link>
            <Link href="/">Who is our project for?</Link>
            <Link href="/">Learn more</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-base text-white">Join us</h1>
            <Link href="/">Be a member</Link>
            <Link href="/">Be a sponsor</Link>
            <Link href="/">Be a cooperator</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-base text-white">Help</h1>
            <Link href="/">Complaints</Link>
            <Link href="/">Frequently asked questions</Link>
            <Link href="/">Support contact</Link>
            <Link href="/">Ombudsman</Link>
          </div>
        </div>
      </div>

      <span className="w-full h-[1px] bg-zinc-600" />
      <div className="w-full flex-wrap flex items-center justify-center gap-5 px-8 md:px-28 lg:justify-between 2xl:px-60">
        <div className="flex gap-5 justify-center">
          <Link href="/">
            <Instagram size={30} /> 
          </Link>
          <Link href="/">
            <Linkedin size={30} />
          </Link>
          <Link href="/">
            <Slack size={30} />
          </Link>
          <Link href="/">
            <MessageCircle size={30} />
          </Link>
        </div>
        <div className="flex gap-10">
          <Link href="/">Service Terms</Link>
          <Link href="/">Security</Link>
          <Link href="/">Privacy</Link>
        </div>
        <div className="flex items-center justify-center gap-1">
          <div className="border-[1px] border-white size-5 rounded-full grid place-items-center">
            C
          </div>
          <p className="text-xs">All rights reserved, #BeF1rst LTDA.</p>
        </div>
      </div>
    </footer>
  );
}