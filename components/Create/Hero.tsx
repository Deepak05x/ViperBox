import React from "react";
import Image from "next/image";

const colors = [
    {
        name: "black",
        color: "bg-[#121212]",
    },
];

const Hero = () => {
    return (
        <section className="flex flex-row w-full items-center justify-center h-[70vh]">
            <section className="bg-gray-100 h-full flex items-center justify-center px-[13rem] py-24">
                <Image src={"/phone-template.png"} alt="phone" width={200} height={200} />
            </section>
            <section className="flex flex-col overflow-y-auto h-full px-24 gap-8">
                <h1>Customize your case</h1>
                <hr />
                <div className="flex flex-col gap-2">
                    <p>Color: Black</p>
                    {colors.map((item, index) => (
                        <div key={index} className={`${item.color} w-[1.5rem] h-[1.5rem] rounded-full`}></div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Hero;
