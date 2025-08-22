import React from "react";
import { useForm } from "react-hook-form";
import { InputField, TextAreaField } from "../(ui)/InputFields";
import Button from "../(ui)/Button";

const medicineTypes = ["Tablet", "Syrup", "Injection", "Capsule", "Ointment", "Drop", "Powder", "Cream"];

export default function MedicineForm({ onSubmit }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const selectedType = watch("medicineType");

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 bg-white rounded-xl shadow-form-shadow w-full">
            <h2 className="text-2xl font-bold mb-4">Add Medicine</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                    label="Medicine Brand Name"
                    {...register("brandName", { required: true })}
                    error={errors.brandName && "Required"}
                />
                <InputField
                    label="Generic Name"
                    {...register("genericName", { required: true })}
                    error={errors.genericName && "Required"}
                />
                <InputField
                    label="Strength (mg/ml etc.)"
                    {...register("strength", { required: true })}
                    error={errors.strength && "Required"}
                />
                <InputField
                    label="Manufacturer Name"
                    {...register("manufacturer", { required: true })}
                    error={errors.manufacturer && "Required"}
                />
                <div>
                    <label className="block font-medium mb-1">Medicine Type</label>
                    <select
                        {...register("medicineType", { required: true })}
                        className="input px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select Type</option>
                        {medicineTypes.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                    {errors.medicineType && <span className="text-red-500 text-sm">Required</span>}
                </div>
                {/* Dynamic Pricing Fields */}
                {selectedType === "Tablet" && (
                    <InputField
                        label="Strip Price"
                        type="number"
                        step="0.01"
                        {...register("stripPrice", { required: true })}
                        error={errors.stripPrice && "Required"}
                    />
                )}
                {selectedType === "Syrup" && (
                    <InputField
                        label="Bottle Price"
                        type="number"
                        step="0.01"
                        {...register("bottlePrice", { required: true })}
                        error={errors.bottlePrice && "Required"}
                    />
                )}
                {/* Default Unit Price for all types */}
                <InputField
                    label="Unit Price"
                    type="number"
                    step="0.01"
                    {...register("unitPrice", { required: true })}
                    error={errors.unitPrice && "Required"}
                />
            </div>
            {/* Long Description Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <TextAreaField
                    label="Indications"
                    rows={4}
                    className="min-h-[120px]"
                    {...register("indications", { required: true })}
                    error={errors.indications && "Required"}
                />
                <TextAreaField
                    label="Composition"
                    rows={4}
                    className="min-h-[120px]"
                    {...register("composition", { required: true })}
                    error={errors.composition && "Required"}
                />
                <TextAreaField
                    label="Description"
                    rows={4}
                    className="min-h-[120px]"
                    {...register("description", { required: true })}
                    error={errors.description && "Required"}
                />
                <TextAreaField
                    label="Dosage"
                    rows={4}
                    className="min-h-[120px]"
                    {...register("dosage", { required: true })}
                    error={errors.dosage && "Required"}
                />
                <TextAreaField
                    label="Administration"
                    rows={4}
                    className="min-h-[120px]"
                    {...register("administration", { required: true })}
                    error={errors.administration && "Required"}
                />
                <TextAreaField
                    label="Interaction"
                    rows={4}
                    className="min-h-[120px]"
                    {...register("interaction", { required: true })}
                    error={errors.interaction && "Required"}
                />
                <TextAreaField
                    label="Contradictions"
                    rows={4}
                    className="min-h-[120px]"
                    {...register("contradictions", { required: true })}
                    error={errors.contradictions && "Required"}
                />
                <TextAreaField
                    label="Side Effects"
                    rows={4}
                    className="min-h-[120px]"
                    {...register("sideEffects", { required: true })}
                    error={errors.sideEffects && "Required"}
                />
                <TextAreaField
                    label="Pregnancy"
                    rows={4}
                    className="min-h-[120px]"
                    {...register("pregnancy", { required: true })}
                    error={errors.pregnancy && "Required"}
                />
                <TextAreaField
                    label="Storage Conditions"
                    rows={4}
                    className="min-h-[120px]"
                    {...register("storage", { required: true })}
                    error={errors.storage && "Required"}
                />
            </div>
            <Button type="submit" size="lg">
                Submit
            </Button>
        </form>
    );
}
