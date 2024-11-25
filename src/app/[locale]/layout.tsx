import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { routing } from '@/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const brunoAceSC = localFont({
  src: "../fonts/BrunoAceSC-Regular.ttf",
  variable: "--font-bruno-ace-sc",
  weight: "400",
  style: "normal",
});

const notoSans = localFont({
  src: "../fonts/NotoSansDisplay.ttf",
  variable: "--font-noto-sans",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Ecorover",
  description: "Ecorover",
};


export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <link rel="icon" href="/images/logo.png" type="image/png" sizes="32x32" />
      <body className={`${geistSans.variable} ${geistMono.variable} ${brunoAceSC.variable} ${notoSans.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


/* export default function RootLayout({
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
 */