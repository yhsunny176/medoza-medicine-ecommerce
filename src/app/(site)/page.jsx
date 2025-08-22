import About from "../(components)/(sections)/About";
import Banner from "../(components)/(sections)/Banner";
import PopularMedicines from "../(components)/(sections)/PopularMedicines";

export default function Home() {
	return (
		<>
			<Banner />
			<PopularMedicines />
			<About />
		</>
	);
}
