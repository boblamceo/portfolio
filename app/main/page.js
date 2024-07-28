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
import Zheng1 from "../../public/achivements/projects/tea/tea1.png";
import Zheng2 from "../../public/achivements/projects/tea/tea2.png";
import Zheng3 from "../../public/achivements/projects/tea/tea3.png";
import Zheng4 from "../../public/achivements/projects/tea/tea4.png";
import Aerodynamic1 from "../../public/achivements/projects/aerodynamic/A1.jpg";
import Aerodynamic2 from "../../public/achivements/projects/aerodynamic/A2.jpg";
import Aerodynamic3 from "../../public/achivements/projects/aerodynamic/A3.jpg";
import Aerodynamic4 from "../../public/achivements/projects/aerodynamic/A4.png";
import AerodynamicVid1 from "../../public/achivements/projects/aerodynamic/A1.mp4";
import AerodynamicVid2 from "../../public/achivements/projects/aerodynamic/A2.mov";
import AerodynamicVid3 from "../../public/achivements/projects/aerodynamic/A3.mp4";
import Tetris from "../../public/achivements/projects/tetris/image.png";
import Ticmoji from "../../public/achivements/projects/ticmoji/image.png";
import Teachable from "../../public/achivements/projects/teachable-machine/image.png";
import Fan from "../../public/achivements/projects/arduino/IMG_2104.MOV";
import NightLight from "../../public/achivements/projects/arduino/IMG_2122.MOV";
import Game1 from "../../public/achivements/projects/arduino/Video - 2024-07-17 3_18_39 PM.MOV";
import Game2 from "../../public/achivements/projects/arduino/IMG_2128.MOV";
import Game3 from "../../public/achivements/projects/arduino/IMG_2130.MOV";
import Game4 from "../../public/achivements/projects/arduino/IMG_2131.MOV";
import Clapclock from "../../public/achivements/projects/arduino/IMG_6487f.MOV";

const projects = [
    { date: "2022", name: "Smake", type: "Game", images: [Smake] },
    {
        date: "2022",
        name: "Binoculars",
        type: "App",
        images: [Bin1, Bin2, Bin3, Bin4, Bin5, Bin6, Bin7],
    },
    {
        date: "2023",
        name: "Zhengde Tea",
        type: "App",
        images: [Zheng1, Zheng2, Zheng3, Zheng4],
    },
    {
        date: "2023",
        name: "Aerodynamic",
        type: "Crypto / App",
        images: [
            Aerodynamic1,
            Aerodynamic2,
            Aerodynamic3,
            Aerodynamic4,
            AerodynamicVid1,
            AerodynamicVid2,
            AerodynamicVid3,
        ],
    },
    { date: "2024", name: "Tetris", type: "AI / Game", images: [Tetris] },
    {
        date: "2024",
        name: "Teachable Machine",
        type: "AI",
        images: [Teachable],
    },
    { date: "2024", name: "Ticmoji", type: "AI / Game", images: [Ticmoji] },
    { date: "2024", name: "Fan", type: "Robotics", images: [Fan] },
    {
        date: "2024",
        name: "Night Light",
        type: "Robotics",
        images: [NightLight],
    },
    {
        date: "2024",
        name: "Game",
        type: "Robotics",
        images: [Game1, Game2, Game3, Game4],
    },
    {
        date: "2024",
        name: "Clap-powered Clock",
        type: "Robotics",
        images: [Clapclock],
    },
    { date: "2024", name: "Music Machine", type: "Robotics", images: [] },
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
