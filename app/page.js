"use client";
import {
    MouseParallaxChild,
    MouseParallaxContainer,
} from "react-parallax-mouse";
import "./styles.css";

export default function App() {
    return (
        <>
            <div className="h-full w-full bg-slate-800 text-white overflow-hidden">
                <div className="h-full flex flex-col justify-center align-middle">
                    <MouseParallaxContainer
                        className="parallax"
                        containerStyle={{
                            width: "100%",
                            display: "grid",
                            gridTemplateColumns: "auto auto auto auto auto",
                        }}
                        globalFactorX={0.3}
                        globalFactorY={0.3}
                        resetOnLeave
                    >
                        <MouseParallaxChild
                            factorX={0.6}
                            factorY={0.1}
                            className="bg-center scale-125 absolute bg-auto w-full h-full"
                        />
                        <MouseParallaxChild
                            factorX={0.5}
                            factorY={0.5}
                            style={{
                                filter: "invert(1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "auto",
                                height: "100%",
                            }}
                        >
                            <h1>Bob Lam</h1>
                            <div>Start</div>
                        </MouseParallaxChild>
                    </MouseParallaxContainer>
                </div>
            </div>
        </>
    );
}
