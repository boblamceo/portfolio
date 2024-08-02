"use client";
import { ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Montserrat, Open_Sans } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const opensans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
});

const Slide = ({ date, name, type, images, videos, description }) => {
    const [hover, setHover] = useState(false);
    const color =
        date === "2022"
            ? "bg-blue-500"
            : date === "2023"
            ? "bg-red-500"
            : "bg-green-500";
    return (
        <Link
            href={{
                pathname: "/description",
                query: {
                    date,
                    name,
                    type,
                    details: description,
                    images,
                    videos,
                },
            }}
        >
            <motion.div
                className="flex flex-row mt-[10vw] ml-[5vw] text-white relative z-0 hover:cursor-pointer"
                viewport={{ once: true }}
                initial={{ x: "-100%", opacity: 0, scale: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{
                    duration: 2,
                    scale: { duration: 0.5, type: "spring" },
                }}
                onMouseEnter={() => {
                    setHover(true);
                }}
                onMouseLeave={() => {
                    setHover(false);
                }}
            >
                <div
                    className={`${color} w-[50vw] rounded-lg p-[1.5vw] h-[30vw] shadow-[0px_2vh_3vh_0.5vh_#fff]`}
                >
                    <div className="flex flex-row justify-between">
                        <div className={`text-[1vw] ${montserrat.className}`}>
                            {date}
                        </div>
                        <div className={`text-[1vw] ${montserrat.className}`}>
                            {type}
                        </div>
                    </div>
                    <div className="flex flex-row mt-[1vh] justify-between items-center">
                        <div className={`${opensans.className} text-[3vw] `}>
                            {name}
                        </div>
                        <motion.div
                            animate={{ rotate: hover ? -45 : 0 }}
                            className="w-[3vw] h-[3vw] aspect-square"
                        >
                            <ArrowForward className="text-white text-[3vw]" />
                        </motion.div>
                    </div>
                    {videos[0] ? (
                        videos[0][0] !== "h" ? (
                            <div className="pt-[2vh] pb-[2vh]">
                                <video
                                    fluid={false}
                                    controls={false}
                                    muted
                                    preload="none"
                                    autoPlay
                                    className="h-[20vw] w-full object-cover object-[50%_25%] rounded-lg"
                                >
                                    <source src={videos[0]} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ) : (
                            <iframe
                                src={videos[0]}
                                frameborder="0"
                                allowfullscreen
                                className="pt-[2vh] pb-[2vh] h-[20vw] w-full object-cover object-[50%_25%] rounded-lg"
                            />
                        )
                    ) : (
                        <div
                            className="h-[20vw] w-full rounded-lg pt-[2vh] pb-[2vh]bg-center bg-cover"
                            style={{
                                backgroundImage: `url(${images[0].src})`,
                            }}
                        />
                    )}
                </div>
            </motion.div>
        </Link>
    );
};

export default Slide;
