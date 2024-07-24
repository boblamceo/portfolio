"use client";

import React, { useEffect, useState } from "react";
import Header from "../header";
import { Montserrat, Open_Sans } from "next/font/google";
import { motion } from "framer-motion";

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
        "violin",
        "websites",
        "apps",
        "AI",
        "video games",
        "swimming",
    ];
    useEffect(() => {
        setTimeout(() => {
            setProduct((product + 1) % productList.length);
            console.log((product + 1) % productList.length);
        }, 4000);
    }, [product]);
    const date1 = new Date("6/9/2010");
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffYear = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    return (
        <div className="bg-slate-800 w-screen h-screen overflow-x-hidden flex whitespace-nowrap scrollbar-hide">
            <div className="about-bg w-screen h-[calc(100%+13vw)] brightness-100 backdrop-brightness-0">
                <Header />
                <div
                    className={`text-white ${montserrat.className} text-[6vw] break-words w-screen  whitespace-normal pl-[4vw] pr-[5vw] mt-[17vw]`}
                >
                    I'm<span className="font-bold">&nbsp;Bob Lam</span>
                    {`, a ${diffYear} year old 
                    student who specializes in `}
                </div>
                <div className="w-screen h-[8vw] pl-[4vw] pr-[5vw] overflow-hidden">
                    <motion.h1
                        className={`text-white ${montserrat.className} text-[6vw] font-bold`}
                        animate={{
                            y: ["55%", 0],
                            opacity: [0, 0.7],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                    >
                        {productList[product]}
                    </motion.h1>
                </div>
            </div>
        </div>
    );
};

export default About;
