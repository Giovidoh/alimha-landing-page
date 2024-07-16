import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Alimha",
    description:
        "Fintech welcome to Alimha and Company Your Trusted Partner in Technology Solutions Transform your ideas into innovative realities We combine expertise, creativity and cutting-edge technology to transform your visions into concrete solutions.",
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
