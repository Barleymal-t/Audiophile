import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Bottom from "@/components/bottom";
import { CartProvider } from "@/context/CartContext";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

export const metadata: Metadata = {
    title: "AudioPhile Ecommerce App",
    description: "Buy Your AudioPhile Equipment Here",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${manrope.variable} antialiased`}>
                <CartProvider>
                    <Navbar />
                    {children}
                    <Bottom />
                    <Footer />
                </CartProvider>
            </body>
        </html>
    );
}
