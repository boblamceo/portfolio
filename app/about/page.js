import React, { useEffect, useState } from "react";
import Header from "../header";
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const opensans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
});

const About = () => {
    const [product, setProduct] = useState(0);
    const productList = [
        "robots",
        "websites",
        "apps",
        "AI",
        "machine learning",
        "games",
    ];
    useEffect(() => {
        setInterval(() => {
            setProduct((product + 1) % productList.length);
        }, 3000);
    }, []);
    return (
        <div className="bg-slate-800 w-screen h-screen overflow-x-hidden flex whitespace-nowrap scrollbar-hide">
            <div className="about-bg w-screen h-[120%] brightness-100 backdrop-brightness-0">
                <Header />
                <div
                    className={`text-white ${montserrat.className} text-[6vw] break-words w-screen  whitespace-normal pl-[4vw] pr-[5vw] mt-[7vw]`}
                >
                    I'm<span className="font-bold">&nbsp;Bob Lam</span>
                    {`, a 14 year old 
                    student who specializes in 
                    making engaging and unique`}
                </div>
                <h1
                    className={`text-white ${montserrat.className} text-[6vw] pl-[4vw] pr-[5vw]`}
                >
                    {productList[product]}
                </h1>
            </div>
        </div>
    );
};

export default About;
