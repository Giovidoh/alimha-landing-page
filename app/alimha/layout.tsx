import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Alimha",
    description:
        "Welcome to Alimha and Company - Your trusted partner in technology solutions. Transform your ideas into innovative realities with our expertise, creativity, and cutting-edge technology. We combine these elements to turn your visions into concrete solutions.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
