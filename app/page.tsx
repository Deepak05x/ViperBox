import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"));
const Title = dynamic(() => import("../components/home/Title"));
const Customer = dynamic(() => import("../components/home/Customer"));
const Working = dynamic(() => import("../components/home/Working"));
const Footer = dynamic(() => import("../components/Footer"));

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
