import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BodyClass from "./BodyClass";
import ScriptInjector from "@/components/common/ScriptInjector";
import { client } from "@/sanity/lib/client";
import { SITE_SETTINGS_QUERY } from "@/lib/queries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cheap Truck Insurance",
  description: "Best Insurance Website",
};

export default async function RootLayout({ children }) {
  const siteSettings = await client.fetch(SITE_SETTINGS_QUERY);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <ScriptInjector globalSettings={siteSettings?.globalSettings} />
      </head>
      <BodyClass>{children}</BodyClass>
    </html>
  );
}