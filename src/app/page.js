import Footer from "./(components)/(shared)/Footer";
import Navbar from "./(components)/(shared)/Navbar";

export default function Home({ children }) {
    return (
        <>
            <header className="bg-white w-full h-20">
                <nav className="max-w-9/12 mx-auto py-8">
                    <Navbar />
                </nav>
            </header>

            <footer>
                <Footer />
            </footer>
        </>
    );
}
