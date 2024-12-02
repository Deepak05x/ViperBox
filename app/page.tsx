"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"));
const Title = dynamic(() => import("@/components/Title"));
const Customer = dynamic(() => import("@/components/Customer"));
const Working = dynamic(() => import("@/components/Working"));
const Footer = dynamic(() => import("@/components/Footer"));

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
