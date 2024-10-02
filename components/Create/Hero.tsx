import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="flex flex-row w-full items-center justify-center h-[50vh]">
            <section className="bg-gray-200 h-full flex items-center justify-center px-[13rem]">
                <Image src={"/phone-template.png"} alt="phone" width={200} height={200} />
            </section>
            <section className="text-5xl flex flex-col overflow-y-auto h-full px-24">
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
            </section>
        </section>
    );
};

export default Hero;
