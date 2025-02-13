import type { Metadata } from "next";
import { Roboto, Silkscreen } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["400", "700"],
});

const silkscreen = Silkscreen({
    variable: "--font-silkscreen",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Pedro Software Developer",
    description: "3D Portfolio of Pedro",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning className={`${silkscreen.variable} antialiased ${roboto.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
