"use client";
import {
    MouseParallaxChild,
    MouseParallaxContainer,
} from "react-parallax-mouse";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
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
                            className="bg-[url('/earth.png')] bg-center absolute bg-auto w-[150vw] h-[150vh]"
                        />
                        <MouseParallaxChild
                            factorX={0.5}
                            factorY={0.5}
                            className="flex align-middle justify-center"
                        >
                            <h1 className={montserrat.className}>Bob Lam</h1>
                            <div>Start</div>
                        </MouseParallaxChild>
                    </MouseParallaxContainer>
                </div>
            </div>
        </>
    );
}
