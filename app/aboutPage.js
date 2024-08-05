"use client";

import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const About = ({ innerref }) => {
    const textIndex = useMotionValue(0);
    const texts = [
        "robots",
        "violin",
        "websites",
        "apps",
        "AI",
        "video games",
        "swimming",
    ];

    const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.get().slice(0, latest)
    );
    const updatedThisRound = useMotionValue(true);

    useEffect(() => {
        // thanks to noelcserespy for letting me permanently borrow this code
        animate(count, 60, {
            type: "tween",
            delay: 1,
            duration: 1,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
            onUpdate(latest) {
                if (updatedThisRound.get() === true && latest > 0) {
                    updatedThisRound.set(false);
                } else if (updatedThisRound.get() === false && latest === 0) {
                    if (textIndex.get() === texts.length - 1) {
                        textIndex.set(0);
                    } else {
                        textIndex.set(textIndex.get() + 1);
                    }
                    updatedThisRound.set(true);
                }
            },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const cursorVariants = {
        blinking: {
            opacity: [0, 0, 1, 1],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0,
                ease: "linear",
                times: [0, 0.5, 0.5, 1],
            },
        },
    };
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
                <motion.span
                    className={`text-white ${montserrat.className} text-[6vw] font-bold`}
                >
                    {displayText}
                </motion.span>
                <motion.div
                    variants={cursorVariants}
                    animate="blinking"
                    className="inline-block h-[6vw] w-[3px] translate-y-1 bg-white"
                />
            </div>
        </div>
    );
};

export default About;
