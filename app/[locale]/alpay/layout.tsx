import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "@/styles/alpayGlobals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Alpay",
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
            <body className={sora.className}>{children}</body>
        </html>
    );
}
