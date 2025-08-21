import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="relative w-40 h-8">
                    <Image src={"/logo-main.svg"} alt="Medoza brand logo" fill={true} />
                </div>
                <div>
                    <ul>
                        <li className="">
                            <Link href="/medicines">Medicines</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
