"use client";

import React, { useState, useRef, useEffect } from "react";
import Header from "../header";
import About from "../aboutPage";
import Projects from "../projectPage";
import { motion } from "framer-motion";
import Image from "next/image";
import loadingsrc from "../../public/loading.gif";
import Slide from "../slide";
import Smake from "../../public/achivements/projects/snake/smake.jpg";
import Bin1 from "../../public/achivements/projects/binoculars/6.5 1.png";
import Bin2 from "../../public/achivements/projects/binoculars/6.5 2.png";
import Bin3 from "../../public/achivements/projects/binoculars/6.5 3.png";
import Bin4 from "../../public/achivements/projects/binoculars/6.5 4.png";
import Bin5 from "../../public/achivements/projects/binoculars/6.5 5.png";
import Bin6 from "../../public/achivements/projects/binoculars/6.5 6.png";
import Bin7 from "../../public/achivements/projects/binoculars/6.5 7.png";

const projects = [
    { date: "2022", name: "Smake", type: "Game", images: [Smake] },
    {
        date: "2022",
        name: "Binoculars",
        type: "App",
        images: [Bin1, Bin2, Bin3, Bin4, Bin5, Bin6, Bin7],
    },
    { date: "2023", name: "Zhengde Tea", type: "App", images: [Smake] },
    {
        date: "2023",
        name: "Aerodynamic",
        type: "Crypto / App",
        images: [Smake],
    },
    { date: "2024", name: "Tetris", type: "AI / Game", images: [Smake] },
    { date: "2024", name: "Teachable Machine", type: "AI", images: [Smake] },
    { date: "2024", name: "Ticmoji", type: "AI / Game", images: [Smake] },
    { date: "2024", name: "Arduino", type: "Robotics", images: [Smake] },
];

const Main = () => {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const [isVisible, setIsVisible] = useState("/about");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.scrollY < window.innerHeight + window.innerWidth * 0.13) {
            setIsVisible("/about");
        } else {
            setIsVisible("/projects");
        }
    };
    if (loading) {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        return (
            <div className="w-screen h-screen flex justify-center items-center  bg-slate-800">
                <Image src={loadingsrc} className="w-[10vw]" />
            </div>
        );
    }
    return (
        <motion.div
            className="bg-slate-800 w-screen flex flex-col -z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
        >
            <Header page={isVisible} /> <About innerref={aboutRef} />{" "}
            <Projects innerref={projectsRef} />
            <Slide />
            <Slide />
            <Slide />
        </motion.div>
    );
};

export default Main;
