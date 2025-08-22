"use client";

import MedicineForm from "app/(components)/(forms)/MedicineForm";
import React from "react";

export default function AddProductsPage() {
    return (
        <>
            <h1 className="text-3xl font-bold mb-6">Add a New Product</h1>
            {/* Add Product form */}
            <MedicineForm />
        </>
    );
}
