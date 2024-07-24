"use client";

import React, { useState, useRef, useEffect } from "react";
import Header from "../header";
import About from "../aboutPage";
import Projects from "../projectPage";
import { Link, animateScroll as scroll } from "react-scroll";

const Main = () => {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const [isVisible, setIsVisible] = useState("/about");

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
    return (
        <div className="bg-slate-800 w-screen flex flex-col">
            <Header page={isVisible} /> <About innerref={aboutRef} />{" "}
            <Projects innerref={projectsRef} />
            <div>hi</div>
        </div>
    );
};

export default Main;
