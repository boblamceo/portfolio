"use client";
import {
    MouseParallaxChild,
    MouseParallaxContainer,
} from "react-parallax-mouse";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

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
    const [mounted, setMounted] = useState(false);
    const [leave, setLeave] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (leave) {
            setTimeout(() => {
                router.push("/about");
            }, 1000);
        }
    }, [leave]);

    if (!mounted) {
        return null;
    }

    return (
        <div className="bg-slate-800 w-screen h-screen">
            <motion.div
                className="h-full w-full bg-black text-white overflow-hidden"
                initial={{
                    scale: 0,
                    opacity: 0,
                    borderRadius: "100%",
                    rotate: 45,
                }}
                animate={{
                    scale: 1,
                    opacity: leave ? 0 : 1,
                    borderRadius: 0,
                    rotate: 0,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
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
                        <motion.div
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2 }}
                        >
                            <MouseParallaxChild
                                factorX={0.5}
                                factorY={0.5}
                                className="flex align-middle justify-center w-screen h-screen flex-col p-[10vw]"
                            >
                                <h1
                                    className={`${
                                        montserrat.className
                                    } drop-shadow-title ${
                                        isOn ? "text-white" : "text-black/0"
                                    } font-bold text-[6vw] absolute mb-[5.5vw] transition-all duration-1000 ease-in-out`}
                                >
                                    Bob Lam
                                </h1>
                                <h1
                                    className={`${montserrat.className} ${
                                        isOn ? "text-black" : "text-white"
                                    } font-bold text-[6vw] transition-all duration-1000 ease-in-out overflow-hidden`}
                                >
                                    Bob Lam
                                </h1>

                                <div
                                    className={`${opensans.className} border-2 w-[30vw] p-[1.5vw] text-[1.5vw] flex flex-row align-middle border-opacity-100 hover:border-opacity-0 transition-all duration-500 bg-gradient-to-r to-white/0 via-red-500 from-white/0 bg-size-200 bg-pos-0 hover:bg-pos-100 cursor-pointer`}
                                    onMouseEnter={() => {
                                        setOn(true);
                                    }}
                                    onMouseLeave={() => {
                                        setOn(false);
                                    }}
                                    onClick={() => {
                                        setLeave(true);
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
                        </motion.div>
                    </MouseParallaxContainer>
                </div>
            </motion.div>
        </div>
    );
}
