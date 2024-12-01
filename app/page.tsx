"use client";

import Navbar from "../components/Navbar";
import Title from "../components/home/Title";
import Customer from "../components/home/Customer";
import Working from "../components/home/Working";
import Footer from "../components/Footer";

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
