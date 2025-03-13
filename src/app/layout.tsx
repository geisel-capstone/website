import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const nsg = Noto_Sans_Georgian({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Geisel Parenting Resources',
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(nsg.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
