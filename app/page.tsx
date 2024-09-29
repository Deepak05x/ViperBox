import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"));
const Title = dynamic(() => import("@/components/Home/Title"));
const Customer = dynamic(() => import("@/components/Home/Customer"));
const Working = dynamic(() => import("@/components/Home/Working"));
const Footer = dynamic(() => import("@/components/Home/Footer"));

const Home: React.FC = () => {
    return (
        <main className="flex flex-col">
            <Navbar />
            <Title />
            <Customer />
            <Working />
            <Footer />
        </main>
    );
};

export default Home;
