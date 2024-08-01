"use client";

import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import useSound from "use-sound";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { IconButton } from "@mui/material";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const Header = ({ page }) => {
    const [volume, setVolume] = useState(false);
    const [background, { stopBackground, isBackgroundPlaying }] =
        useSound("/rachmaninoff.mp3");
    const [bloop, { stopBloop }] = useSound("/bloop.mp3");
    const [click, { stopClick }] = useSound("/click.mp3");
    useEffect(() => {
        if (volume) {
            background();
        } else if (isBackgroundPlaying) {
            stopBackground();
            stopBloop();
            stopClick();
        }
    }, [volume]);
    return (
        <motion.div
            className={`flex flex-row p-[1.5vw] ${montserrat.className} fixed top-0 z-10 w-[98vw] justify-between`}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
        >
            <h1 className={"text-[2vw] text-white"}>Bob Lam</h1>{" "}
            <ul className="mr-[20vw] text-white">
                <li
                    className={`text-[1vw] header-bt ${
                        page === "/about" && "font-bold"
                    }`}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    About
                </li>
                <li
                    className={`text-[1vw] header-bt ${
                        page === "/projects" && "font-bold"
                    }`}
                    onClick={() => {
                        window.scrollTo({
                            top: window.innerHeight + window.innerWidth * 0.13,
                            behavior: "smooth",
                        });
                    }}
                >
                    Projects
                </li>
                <li
                    className={`text-[1vw] header-bt ${
                        page === "/awards" && "font-bold"
                    }`}
                >
                    Awards
                </li>
                <li
                    className={`text-[1vw] header-bt ${
                        page === "/contact" && "font-bold"
                    }`}
                >
                    Contact
                </li>
            </ul>
            <IconButton
                onClick={() => {
                    setVolume(!volume);
                }}
                className="h-[3vw] aspect-square"
            >
                {volume ? (
                    <VolumeUpIcon className="text-[2vw] text-white" />
                ) : (
                    <VolumeOffIcon className="text-[2vw] text-white" />
                )}
            </IconButton>
        </motion.div>
    );
};

export default Header;
