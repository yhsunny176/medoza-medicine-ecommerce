"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import LogoutButton from "../(ui)/LogoutButton";

export default function Navbar() {
    const pathname = usePathname();
    const { data: session } = useSession();

    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="relative w-40 h-8">
                    <Image src={"/logo-main.svg"} alt="Medoza brand logo" fill={true} />
                </div>
                <div>
                    <ul className="flex gap-12">
                        <li>
                            <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/#about-section">About</Link>
                        </li>

                        <li>
                            <Link className={`link ${pathname === "/medicines" ? "active" : ""}`} href="/medicines">
                                Medicines
                            </Link>
                        </li>

                        <li>
                            <Link href="/#popular-medicines">Popular Medicines</Link>
                        </li>
                        {session && (
                            <li>
                                <Link href="/dashboard/add-products">Dashboard</Link>
                            </li>
                        )}
                    </ul>
                </div>

                <div>
                    {session ? (
                        <LogoutButton />
                    ) : (
                        <Link
                            href={"/login"}
                            className="bg-green-primary text-white hover:bg-green-dark transition-colors duration-600 ease-in-out cursor-pointer px-4 py-2 text-base">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
