import type { Metadata } from "next";
import {Mona_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const MonaSans = Mona_Sans({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Github-copilot",
  description: "The AI editor for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(MonaSans.className,"antialiased") }
      >
        {children}
      </body>
    </html>
  );
}
