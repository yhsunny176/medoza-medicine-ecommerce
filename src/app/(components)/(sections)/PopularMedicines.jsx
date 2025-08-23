import MedicineCard from "app/(components)/(cards)/MedicineCard";

async function getMedicines() {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/medicines`, { next: { revalidate: 0 } });
    const data = await res.json();
    return data.medicines || [];
}

export default async function PopularMedicines() {
    const medicines = await getMedicines();
    // Sort by created/added date if available, else just take last 6
    const latestMedicines = medicines.slice(-6).reverse();
    return (
        <section id="popular-medicines" className="max-w-full mt-16 mx-auto py-16 bg-gray-50">
            <h2 className="text-2xl text-center font-bold mb-6">Popular Medicines</h2>
            <div className="max-w-9/12 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {latestMedicines.length === 0 ? (
                        <div className="col-span-full text-center text-gray-500">No medicines found.</div>
                    ) : (
                        latestMedicines.map((med) => <MedicineCard key={med._id} medicine={med} />)
                    )}
                </div>
                <div className="mt-8 text-center">
                    <a
                        href="/medicines"
                        className="inline-block bg-green-primary text-white px-6 py-2 rounded-md hover:bg-green-dark transition-colors font-semibold">
                        View All
                    </a>
                </div>
            </div>
        </section>
    );
}
