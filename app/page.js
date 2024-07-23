"use client";
import {
    MouseParallaxChild,
    MouseParallaxContainer,
} from "react-parallax-mouse";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const opensans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
});

export default function App() {
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
                                className={`${opensans.className} border-2 w-[30vw] p-[1.5vw] text-[1.5vw] flex flex-row align-middle`}
                            >
                                Start{" "}
                                <div className="flex align-middle justify-center h-full">
                                    <div className="origin-center inline-block ml-[5vw] w-[1vw] h-[1vw] border-t-[2px] border-l-[2px] border-white rotate-[135deg] after:block after:w-[2px] after:h-[4vw] after:bg-white after:-rotate-45 after:translate-x-[15px] after:translate-y-[4px]"></div>
                                </div>
                            </div>
                        </MouseParallaxChild>
                    </MouseParallaxContainer>
                </div>
            </div>
        </>
    );
}
