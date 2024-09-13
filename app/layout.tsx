import type { Metadata } from "next";
import {Sen} from 'next/font/google'
import "./globals.css";




const sen = Sen({
  subsets: ["latin"],
  weight: ['400','500','600','700','800']
})


export const metadata: Metadata = {
  title: "Viper Box",
  description: "Viper box is an e-commerce website which is used to customize ur phone back-screen with the photos of your choice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sen.className} min-h-screen w-full scroll-smooth box-border antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
