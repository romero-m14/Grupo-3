import Header from "../components/Header";
import Principal from "../components/Principal";
import Footer from "../components/Footer";

export default function Home() {

    return (
        <>
            <Header />

            <main className="pt-25 w-full bg-fondo">
                <Principal />
            </main>

            <Footer />
        </>
    )
}