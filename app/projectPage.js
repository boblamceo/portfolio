"use client";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const Projects = ({ innerref }) => {
    return (
        <div
            ref={innerref}
            className="projects-bg w-screen h-screen bg-cover mt-0 flex flex-col align-middle justify-center"
        >
            <h1 className={`text-white font-bold `}>Projects</h1>
        </div>
    );
};

export default Projects;
