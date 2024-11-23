import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const brunoAceSC = localFont({
  src: "./fonts/BrunoAceSC-Regular.ttf",
  variable: "--font-bruno-ace-sc",
  weight: "400",
  style: "normal",
});

const notoSans = localFont({
  src: "./fonts/NotoSansDisplay.ttf",
  variable: "--font-noto-sans",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Ecorover",
  description: "Ecorover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/logo.png" type="image/png" sizes="32x32" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${brunoAceSC.variable} ${notoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
