"use client";
import {
    MouseParallaxChild,
    MouseParallaxContainer,
} from "react-parallax-mouse";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const opensans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
});

export default function Home() {
    const [isOn, setOn] = useState(false);
    return (
        <>
            <div className="h-full w-full bg-black text-white overflow-hidden">
                <div className="h-full flex flex-col justify-center align-middle">
                    <MouseParallaxContainer
                        containerStyle={{
                            width: "100%",
                            display: "grid",
                            gridTemplateColumns: "auto auto auto auto auto",
                        }}
                        className="w-screen h-screen"
                        globalFactorX={0.3}
                        globalFactorY={0.3}
                    >
                        <MouseParallaxChild
                            factorX={0.6}
                            factorY={0.1}
                            className="bg-[url('/earth.png')] bg-center absolute bg-auto w-[150vw] h-[150vh] flex justify-center align-middle"
                        />
                        <MouseParallaxChild
                            factorX={0.5}
                            factorY={0.5}
                            className="flex align-middle justify-center w-screen h-screen flex-col p-[10vw]"
                        >
                            <h1
                                className={`${montserrat.className} text-white font-bold text-[6vw]`}
                            >
                                Bob Lam
                            </h1>
                            <div
                                className={`${opensans.className} border-2 w-[30vw] p-[1.5vw] text-[1.5vw] flex flex-row align-middle border-opacity-100 hover:border-opacity-0 transition-all duration-500 bg-gradient-to-r to-white/0 via-red-500 from-white/0 bg-size-200 bg-pos-0 hover:bg-pos-100`}
                                onMouseEnter={() => {
                                    setOn(true);
                                }}
                                onMouseLeave={() => {
                                    setOn(false);
                                }}
                            >
                                Start{" "}
                                <div className="arrow-container">
                                    <motion.div
                                        animate={{ x: isOn ? 0 : -200 }}
                                        transition={{
                                            ease: "easeInOut",
                                            duration: 2,
                                        }}
                                    >
                                        <div className="right-arrow"></div>
                                    </motion.div>
                                </div>
                            </div>
                        </MouseParallaxChild>
                    </MouseParallaxContainer>
                </div>
            </div>
        </>
    );
}
