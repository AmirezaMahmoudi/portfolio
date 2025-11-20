import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Amirreza Mahmoudi | Front end Developer & UI/UX Enthusiast",
    template: "%s | Amirreza Mahmoudi",
  },
  description:
    "front end  Developer specializing in React, Next.js, TypeScript, and modern web technologies. Passionate about building performant, beautiful, and user-centric digital experiences.",
  keywords: [
    "Amirreza Mahmoudi",
    "full-stack developer",
    "react developer",
    "next.js developer",
    "typescript",
    "frontend developer",
    "web developer",
    "portfolio",
    "javascript developer",
    "ui/ux",
  ],
  creator: "Amirreza Mahmoudi",
  publisher: "Amirreza Mahmoudi",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
