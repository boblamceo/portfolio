"use client";

import React, { useState, useRef, useEffect } from "react";
import Header from "../header";
import About from "../aboutPage";
import Projects from "../projectPage";
import { motion } from "framer-motion";
import Image from "next/image";
import loadingsrc from "../../public/loading.gif";

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
        console.log(
            window.scrollY,
            window.innerHeight + window.innerWidth * 0.13
        );
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
            className="bg-slate-800 w-screen flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
        >
            <Header page={isVisible} /> <About innerref={aboutRef} />{" "}
            <Projects innerref={projectsRef} />
        </motion.div>
    );
};

export default Main;
