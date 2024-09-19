import React from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";

const Title = () => {
    return (
        <section className="flex gap-24 items-center justify-center py-24">
            <section className="flex flex-col gap-12">
                <h1 className="flex flex-col gap-2 text-7xl font-bold">
                    Your Image on a
                    <span className="flex gap-4 text-green">
                        Custom<span className="text-black">Phone Case</span>
                    </span>
                </h1>
                <p className="flex flex-col text-[1rem] text-black/70 font-semibold">
                    Capture your favorite memories with your own, one-of-one case.<span>Viperbox allows you to protect your memories, not just your phone.</span>
                </p>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <TiTick className="text-2xl text-green" />
                        <p className="font-bold text-lg">High-quality, durable material</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <TiTick className="text-2xl text-green" />
                        <p className="font-bold text-lg">Modern models supported</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <TiTick className="text-2xl text-green" />
                        <p className="font-bold text-lg">User friendly</p>
                    </div>
                </div>
            </section>
            <section className="flex items-start">
                <Image src={"/phone-template.png"} alt="phone" width={250} height={250} />
                <Image src={"/your-image.png"} alt="your" width={150} height={150} />
            </section>
        </section>
    );
};

export default Title;
