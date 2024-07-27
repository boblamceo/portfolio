"use client";

import { motion } from "framer-motion";
import { Montserrat, Open_Sans } from "next/font/google";
import { useState } from "react";
import { getPhotosByQuery } from "./api/limewire";
import { useCookies } from "next-client-cookies";
import Slide from "./slide";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const opensans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
});

const Projects = ({ innerref }) => {
    const cookies = useCookies();
    const generated = cookies.get("generated");
    // STATE VARIABLES
    const [userPrompt, setUserPrompt] = useState("");
    const [generatedImage, setGeneratedImage] = useState("");

    const handleImageHandler = async () => {
        if (!generated) {
            const data = await getPhotosByQuery({ query: userPrompt });
            setGeneratedImage(data);
            cookies.set("generated", true);
        }
    };
    return (
        <div
            ref={innerref}
            className={`${
                !generatedImage && "projects-bg"
            } w-screen h-screen bg-cover mt-0 flex flex-col items-center bg-center overflow-y-hidden`}
            style={{
                backgroundImage: generatedImage && `url(${generatedImage})`,
            }}
        >
            <motion.h1
                className={`text-white font-bold ${montserrat.className} text-[8vw] h-[60vh] flex items-end`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
            >
                Projects
            </motion.h1>
            <div className="h-[40vh] w-screen flex items-end justify-center">
                <motion.div
                    className="bg-white border rounded-full w-[80vw] flex flex-row mb-[5vh]"
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div
                        className={`transition ease-in-out duration-300 bg-[#F2613F] rounded-full text-white w-[25%] p-[1.6vw] text-[1.2vw] text-center ${montserrat.className} font-bold cursor-pointer hover:bg-red-500 `}
                        onClick={handleImageHandler}
                    >
                        Generate an Image!
                    </div>
                    <input
                        className={`${opensans.className} w-full px-[1.6vw] rounded-e-full focus:outline-none`}
                        placeholder="Write your prompt here..."
                        onChange={(e) => {
                            setUserPrompt(e.target.value);
                        }}
                    ></input>
                </motion.div>
            </div>
            <Slide elements={1} />
        </div>
    );
};

export default Projects;
