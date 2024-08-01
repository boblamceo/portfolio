"use client";

import React, { useEffect, useState } from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const About = ({ innerref }) => {
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
        }, 4000);
    }, [product]);
    const date1 = new Date("6/9/2010");
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffYear = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    return (
        <div
            className="about-bg w-screen h-[calc(100vh+13vw)] mt-0 bg-cover bg-no-repeat flex flex-col justify-end pb-[6vw]"
            ref={innerref}
        >
            <motion.div
                className={`text-white ${montserrat.className} text-[6vw] break-words w-screen  whitespace-normal pl-[4vw] pr-[5vw]`}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
            >
                I&apos;m
                <span
                    className={`font-bold hover:drop-shadow-title transition-all duration-1000`}
                >
                    &nbsp;Bob Lam
                </span>
                {`, a ${diffYear} year old 
                    student who specializes in `}
            </motion.div>
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
    );
};

export default About;
