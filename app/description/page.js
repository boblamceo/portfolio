"use client";
import { Montserrat, Open_Sans } from "next/font/google";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import Header from "../header";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const opensans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
});

const Description = () => {
    const searchParams = useSearchParams();

    const name = searchParams.get("name");
    const details = searchParams.get("details");
    console.log(details);
    return (
        <div className="bg-slate-900 w-screen h-screen overflow-hidden">
            <Header page="/projects" />
            <h1
                className={`${montserrat.className} text-[6vw] inline-block bg-clip-text bg-gradient-to-r from-slate-900 via-white to-white text-transparent mt-[5vw] ml-[5vw]`}
            >
                {name}
            </h1>
            <br />
            <div
                className={`${opensans.className} text-[3vw] inline-block bg-clip-text bg-gradient-to-r from-slate-900 via-white via-white to-white text-transparent ml-[2vw]`}
            >
                {details}
            </div>
        </div>
    );
};

export default Description;
