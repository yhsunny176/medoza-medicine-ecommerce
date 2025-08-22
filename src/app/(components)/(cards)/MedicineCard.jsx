"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function MedicineCard({ medicine }) {
    const { packImage, brandName, genericName, strength, stripPrice } = medicine;
    return (
         <div className="bg-white rounded-xl shadow-md hover:shadow-card-shadow border border-gray-100 hover:border-gray-200 p-4 flex flex-col items-center cursor-pointer transition-shadow duration-500 ease-in-out">
            <div className="relative w-full h-40">
                <Image src={packImage} alt="Image of the Medicine Pack" fill={true} />
            </div>

            <div className="w-full py-2 *:font-montserrat">
                <div className="text-2xl font-outfit font-bold mb-1 line-clamp-2">{brandName}</div>
                <div className="text-paragraph-primary font-medium mb-1">{genericName}</div>
                <div className="text-">{strength}</div>
                <div className="text-paragraph-primary font-bold text-3xl my-4 flex flex-col">৳{stripPrice}</div>

                <Link
                    href={`/medicines/${medicine._id}`}
                    className="bg-green-primary font-montserrat text-white hover:bg-green-dark transition-colors duration-600 ease-in-out cursor-pointer px-4 py-2 text-base rounded-md">
                    View Details
                </Link>
            </div>
        </div>
    );
}
