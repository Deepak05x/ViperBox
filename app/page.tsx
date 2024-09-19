import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"));
const Title = dynamic(() => import("@/components/Home/Title"));

const Home = () => {
    return (
        <main className="flex flex-col">
            <Navbar />
            <Title />
        </main>
    );
};

export default Home;
