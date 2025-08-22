"use client";

import GoogleButton from "app/(components)/(ui)/GoogleButton";
import Image from "next/image";
import React from "react";

export default function LoginPage() {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen w-full">
            <div className="banner w-full h-80 lg:h-screen lg:w-7/12 bg-gradient-to-l from-cyan-500 to-blue-500 flex items-center justify-center p-4 md:p-0">
                <div className="relative w-11/12 h-full">
                    <Image
                        src={"/medicine-phone-3d.webp"}
                        alt="medicine and phone 3d image"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="login-container w-full flex-1 flex items-center justify-center p-4 md:p-0 lg:w-5/12">
                <div className="p-6 shadow-login-form-shadow md:max-w-10/12 lg:max-w-xs xl:max-w-lg w-full">
                    <Image src={"/logo-main.svg"} alt="brand logo" width={160} height={48} className="mb-8" />
                    <h1 className="font-outfit font-semibold text-2xl sm:text-3xl">Sign in to your account</h1>
                    <p className="mt-5 text-paragraph-text-light text-base sm:text-lg">
                        Join Medoza Medicine and experience hassle-free access to trusted healthcare products!
                    </p>
                    <GoogleButton />
                </div>
            </div>
        </div>
    );
}