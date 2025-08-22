import Navbar from "../(components)/(shared)/Navbar";
import Footer from "../(components)/(shared)/Footer";
import "../globals.css";
import { SessionProvider } from "next-auth/react";

export default function SiteLayout({ children }) {
    return (
        <SessionProvider>
            <header className="bg-white w-full h-full">
                <nav className="max-w-9/12 mx-auto py-8">
                    <Navbar />
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </SessionProvider>
    );
}
