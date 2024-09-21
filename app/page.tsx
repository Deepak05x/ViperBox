import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"));
const Title = dynamic(() => import("@/components/Home/Title"));
const Customer = dynamic(() => import("@/components/Home/Customer"));

const Home = () => {
    return (
        <main className="flex flex-col">
            <Navbar />
            <Title />
            <Customer />
        </main>
    );
};

export default Home;
