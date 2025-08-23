
import MedicineCard from "app/(components)/(cards)/MedicineCard";
import React from "react";

async function getMedicines() {
	const res = await fetch(`${process.env.NEXTAUTH_URL}/api/medicines`, { next: { revalidate: 0 } });
	const data = await res.json();
	return data.medicines || [];
}

export default async function Medicines() {
	const medicines = await getMedicines();
	return (
		<div className="min-h-screen max-w-9/12 mx-auto py-16">
			<h1 className="text-3xl font-bold mb-6">All Medicines</h1>
			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
				{medicines.length === 0 ? (
					<div className="col-span-full text-center text-gray-500">No medicines found.</div>
				) : (
					medicines.map((med) => (
						<MedicineCard key={med._id} medicine={med} />
					))
				)}
			</div>
		</div>
	);
}
