import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "First Club | Choose a club and receive a Olimpic Calendar",
        template: `%s | First Club`
    },
    description: "First Club is a platform to choose a club between different moddalities such as chess, astronomy and olimpics.",
    icons: {
        icon: [
            {
                url: "../app/favicon.ico",
                href: "../app/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "First Club | Choose a club and receive a Olimpic Calendar",
        description: "First Club is a platform to choose a club between different moddalities such as chess, astronomy and olimpics.",
    },
    metadataBase: new URL("https://first-club-galembeck.vercel.app"),
};