import { Outfit, Montserrat } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import Navbar from "./(components)/(shared)/Navbar";
import Footer from "./(components)/(shared)/Footer";
import "./globals.css";

const outfitSans = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata = {
    title: "Medoza",
    description: "Medicine Delivered with Trust.",
    icons: {
        icon: [
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon.ico", sizes: "any" },
        ],
        shortcut: "/favicon.svg",
        apple: "/favicon.svg",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${outfitSans.variable} ${montserrat.variable} antialiased`}>
                <SessionProvider>{children}</SessionProvider>
            </body>
        </html>
    );
}
