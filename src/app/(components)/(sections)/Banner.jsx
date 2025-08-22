import React from "react";
import Link from "next/link";

export default function Banner() {
    return (
        <section id="banner-section">
            <div className="max-w-9/12 mt-12 py-16 px-16 rounded-2xl mx-auto h-[680px] bg-gradient-to-l from-cyan-500 to-blue-500">
                <div className="flex h-full items-center justify-between">
                    {/* Left Section */}
                    <div className="flex-1 pr-8 flex flex-col justify-center">
                        
                        <h1 className="text-6xl font-bold text-white mb-6 font-outfit">Medoza: Trusted Care, Delivered</h1>
                        <p className="text-lg text-white mb-4 font-montserrat">
                            Empowering you to access authentic medicines, expert guidance, and seamless delivery—because
                            every dose matters.
                        </p>

                        <Link href={"/medicines"} className="text-button-text-secondary font-montserrat bg-cyan-primary hover:scale-105 transition-all duration-600 ease-in-out cursor-pointer py-4 px-6 font-semibold rounded-xl max-w-max">Buy Medicine</Link>
                        
                    </div>
                    {/* Right Section */}
                    <div className="flex-1 flex justify-center items-center">
                        <img src="/3d-background-banner.webp" alt="Medicine Banner" className="w-[600px] h-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
}
