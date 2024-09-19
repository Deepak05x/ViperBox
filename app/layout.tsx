import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/context/SessionProvider";

const recursive = Recursive({ subsets: ["latin"] });

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
            <body className={`${recursive.className} min-h-screen w-full scroll-smooth box-border antialiased bg-gray-50`}>
                <SessionProvider>{children}</SessionProvider>
            </body>
        </html>
    );
}
