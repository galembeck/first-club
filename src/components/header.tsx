import React from "react";

import Link from "next/link";
import Image from "next/image";

import { currentUser } from "@clerk/nextjs/server";

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

import beFirstImage from "@/assets/images/be-first.png";
import { UserButton } from "@clerk/nextjs";

const olympicClubs: { 
  title: string; 
  href: string; 
  description: string;
}[] = [
  {
    title: "Chess",
    href: "/#olympic-clubs",
    description:
      "Where passion for chess meets the spirit of competition! A club dedicated to promoting the game of chess and fostering a community of players who strive for excellence. Whether you’re a seasoned grandmaster or a curious beginner, you’ll find a welcoming environment to hone your skills and enjoy the game.",
  },
  {
    title: "Astronomy",
    href: "/#olympic-clubs",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Olympics",
    href: "/#olympic-clubs",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
]

export async function Header() {
  const user = await currentUser();


  return(
    <header className="w-full h-auto sticky flex items-center justify-between px-7 py-6 bg-gray-950">
      <div>
        <Link href="/">
          <Image src={beFirstImage} alt="Be #F1rst!" className="w-52" />
        </Link>
      </div>

      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-gray-950 text-white hover:bg-gray-950 hover:text-white/70 focus:bg-gray-950 focus:text-white`}>
                        Home
                      </NavigationMenuLink>
                      <TooltipContent>
                        <p>Return to home</p>
                      </TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-gray-950 text-white hover:bg-gray-950 hover:text-white/70 focus:bg-gray-950 focus:text-white`}>
                        About us
                      </NavigationMenuLink>
                      <TooltipContent>
                        <p>Wnat to know more about us?</p>
                      </TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-gray-950 text-white hover:bg-gray-950 hover:text-white/70 focus:bg-gray-950 focus:text-white data-[state=open]:bg-gray-950">
                Olympic Clubs
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] bg-[#110E19]">
                  {olympicClubs.map((olympicClubs) => (
                    <ListItem
                      key={olympicClubs.title}
                      title={olympicClubs.title}
                      href={olympicClubs.href}
                      className="text-white hover:text-white/70 bg-gray-950/70 focus:bg-gray-950/70"
                    >
                      {olympicClubs.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
              <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-gray-950 text-white hover:bg-gray-950 hover:text-white/70 focus:bg-gray-950 focus:text-white`}>
                        Olympic Calendar
                      </NavigationMenuLink>
                      <TooltipContent>
                        <p>Check the olympic calendar of clubs</p>
                      </TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </NavigationMenuItem>

            <div>
              {user ? (
                <UserButton />
              ) : (
                <Button className="hover:bg-primary/70 hover:text-white/70" variant="default">
                  <Link href="/sign-in">
                    Login
                  </Link>
                </Button>
              )}
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">
            {title}
          </div>
          <p className="line-clamp-4 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"