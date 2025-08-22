"use client"

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { login } from "lib/actions/auth";

export default function GoogleButton() {
    return (
        <button
            onClick={() => login()}
            className="flex items-center gap-4 py-2 border border-blue-primary px-6 rounded-xl mt-8 cursor-pointer hover:shadow-lg transition-shadow duration-500 ease-in-out w-full sm:w-auto">
            <span>
                <FcGoogle size={"32"} />
            </span>
            Sign in with Google
        </button>
    );
}
