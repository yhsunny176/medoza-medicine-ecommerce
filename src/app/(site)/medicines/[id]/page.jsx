import Image from "next/image";

async function getMedicineById(id) {
    const res = await fetch(`http://localhost:3000/api/medicines/${id}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.medicine || null;
}

export default async function MedicineDetail({ params }) {
    const { id } = params;
    const medicine = await getMedicineById(id);
    if (!medicine) return notFound();
    const {
        packImage,
        brandName,
        genericName,
        strength,
        unitPrice,
        indications,
        composition,
        description,
        dosage,
        administration,
        interaction,
        contradictions,
        sideEffects,
        pregnancy,
        storage,
        pharmacology,
        manufacturer,
    } = medicine;
    return (
        <div className="max-w-9/12 mx-auto p-6 bg-white rounded-xl shadow-md mt-8">
            {/* Top section: image and basic info */}
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="relative w-8/12 h-[450px] rounded shadow border border-gray-200">
                    <Image src={packImage} alt={brandName} className="object-contain" fill={true} />
                </div>
                <div className="flex-1 border border-gray-200 py-14 px-4 rounded-xl">
                    <h1 className="text-4xl font-bold mb-2">{brandName}</h1>

                    <div className="text-lg text-gray-700 mb-1">
                        Generic: <span className="font-bold text-2xl flex flex-col mb-4">{genericName}</span>
                    </div>
                    <div className="text-lg text-gray-700 mb-1">
                        Strength: <span className="font-bold text-2xl flex flex-col mb-4">{strength}</span>
                    </div>
                    <div className="text-lg text-gray-700 mb-1">
                        Manufacturer: <span className="font-bold text-2xl flex flex-col mb-4">{manufacturer}</span>
                    </div>
                    <div className="text-blue-600 font-bold mb-2 text-3xl">
                        {" "}
                        <span className="text-2xl font-semibold text-gray-700 mr-3">Unit Price:</span>৳{unitPrice}
                    </div>
                </div>
            </div>

            {/* Safety Advices (placeholder icons/colors) */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Safety Advices</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded">
                        <span className="text-red-600 font-bold">CAUTION</span>

                        <span className="text-gray-700">Consult your doctor before consuming alcohol.</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded">
                        <span className="text-yellow-600 font-bold">CONSULT YOUR DOCTOR</span>
                        text-blue-primary <span className="text-gray-700">If you are pregnant or breastfeeding.</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded">
                        <span className="text-green-600 font-bold">SAFE IF PRESCRIBED</span>

                        <span className="text-gray-700">Safe for kidney/liver patients if prescribed.</span>
                    </div>
                </div>
            </div>

            {/* Overview Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Medicine Overview</h2>

                <div className="mb-2">
                    <span className="font-bold text-2xl flex flex-col mb-2 mt-4 text-blue-primary">Indications:</span>{" "}
                    {indications}
                </div>
                <div className="mb-2">
                    <span className="font-bold text-2xl flex flex-col mb-2 mt-4 text-blue-primary">Description:</span>{" "}
                    {description}
                </div>
                <div className="mb-2">
                    <span className="font-bold text-2xl flex flex-col mb-2 mt-4 text-blue-primary">Uses:</span>{" "}
                    {pharmacology}
                </div>
                <div className="mb-2">
                    <span className="font-bold text-2xl flex flex-col mb-2 mt-4 text-blue-primary">Dosage:</span>{" "}
                    {dosage}
                </div>
                <div className="mb-2">
                    <span className="font-bold text-2xl flex flex-col mb-2 mt-4 text-blue-primary">
                        Administration:
                    </span>{" "}
                    {administration}
                </div>
                <div className="mb-2">
                    <span className="font-bold text-2xl flex flex-col mb-2 mt-4 text-blue-primary">Side Effects:</span>{" "}
                    {sideEffects}
                </div>
                <div className="mb-2">
                    <span className="font-bold text-2xl flex flex-col mb-2 mt-4 text-blue-primary">Interaction:</span>{" "}
                    {interaction}
                </div>
                <div className="mb-2">
                    <span className="font-bold text-2xl flex flex-col mb-2 mt-4 text-blue-primary">
                        Contradictions:
                    </span>{" "}
                    {contradictions}
                </div>
                <div className="mb-2">
                    <span className="font-bold text-2xl flex flex-col mb-2 mt-4 text-blue-primary">Pregnancy:</span>{" "}
                    {pregnancy}
                </div>
                <div className="mb-2">
                    <span className="font-bold text-2xl flex flex-col mb-2 mt-4 text-blue-primary">
                        Storage Conditions:
                    </span>{" "}
                    {storage}
                </div>
                <div className="mb-2">
                    <span className="font-bold text-2xl flex flex-col mb-2 mt-4 text-blue-primary">Composition:</span>{" "}
                    {composition}
                </div>
            </div>
        </div>
    );
}
