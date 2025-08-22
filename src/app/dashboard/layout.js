import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen">
            <DashboardSidebar />
            <main className="flex-1 p-10 bg-gray-100 relative ml-64">
                <div className="absolute top-6 right-10">
                    <Link href="/" className="bg-green-primary text-white px-4 py-2 rounded hover:bg-green-dark transition-colors">Go to Home</Link>
                </div>
                {children}
            </main>
        </div>
    );
}
