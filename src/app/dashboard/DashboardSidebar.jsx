"use client";

import LogoutButton from "app/(components)/(ui)/LogoutButton";
import Link from "next/link";
import React from "react";

export default function DashboardSidebar() {
    return (
        <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col p-6 justify-between fixed top-0 left-0 z-30">
            <div>
                <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <Link href="/dashboard/add-products" className="hover:text-green-400">Add Products</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="mb-2">
                {/* Logout button at bottom */}
                <div className="w-full">
                    {/* Use the existing LogoutButton component */}
                    <div className="flex justify-center">
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </aside>
    );
}
