"use client";
import { Montserrat } from "next/font/google";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import Header from "../header";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const Description = () => {
    const searchParams = useSearchParams();

    const name = searchParams.get("name");
    return (
        <div className="bg-slate-900 w-screen h-screen">
            <Header page="/projects" />
            <h1
                className={`${montserrat.className} text-[6vw] bg-clip-text bg-gradient-to-r from-slate-900 to-white text-transparent w-[25vw] font-bold`}
            >
                {name}
            </h1>
        </div>
    );
};

export default Description;
