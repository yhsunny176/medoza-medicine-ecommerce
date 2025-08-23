import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-3">
                    <Image src="/logo-white.svg" alt="Medoza Logo" width={160} height={48} />
                </div>
                <nav className="flex flex-wrap gap-6 text-base">
                    <Link href="/" className="hover:text-primary transition">
                        Home
                    </Link>
                    <Link href="/#about-section" className="hover:text-primary transition">
                        About
                    </Link>
                    <Link href="/medicines" className="hover:text-primary transition">
                        Medicines
                    </Link>
                    <Link href="/#popular-medicines" className="hover:text-primary transition">
                        Popular Medicines
                    </Link>
                    {/* Optionally, add Dashboard link if user is logged in, but footer is static so skip for now */}
                </nav>
                <div className="flex gap-4">
                    <Link href="https://www.facebook.com/yeasinulhaqsani" aria-label="Facebook" className="hover:text-primary">
                        <FaFacebook size={24} />
                    </Link>

                    <Link href="https://www.linkedin.com/in/yeasinulhaquesani/" aria-label="LinkedIn" className="hover:text-primary">
                        <FaLinkedinIn size={24} />
                    </Link>

                    <Link href="https://x.com/yeasinul_haq" aria-label="LinkedIn" className="hover:text-primary">
                        <FaXTwitter size={24} />
                    </Link>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Medoza. All rights reserved.
            </div>
        </footer>
    );
}
