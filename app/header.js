"use client";

import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import useSound from "use-sound";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { IconButton } from "@mui/material";
import Link from "next/link";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const Header = ({ page }) => {
    const [volume, _setVolume] = useState(false);
    const volumeRef = React.useRef(volume);
    const setVolume = (data) => {
        volumeRef.current = data;
        _setVolume(data);
    };
    const [background, { stop }] = useSound("/rachmaninoff.mp3", {
        interrupt: true,
    });
    const [click] = useSound("/click.mp3", { volume: 0.3 });
    useEffect(() => {
        if (volume) {
            window.addEventListener("mousedown", () => {
                if (volumeRef.current) {
                    click();
                }
            });
        }
    }, [volume]);
    return (
        <motion.div
            className={`flex flex-row p-[1.5vw] ${montserrat.className} fixed top-0 z-10 w-[98vw] justify-between`}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
        >
            <Link className={"text-[2vw] text-white"} href={"/main"}>
                Bob Lam
            </Link>
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
                            top:
                                window.innerHeight +
                                window.innerWidth * 0.13 +
                                1,
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
                    onClick={() => {
                        window.scrollTo({
                            top:
                                window.innerWidth * 12 * 0.4 +
                                window.innerHeight * 0.15 +
                                window.innerHeight +
                                window.innerWidth * 0.13 +
                                window.innerHeight +
                                1,
                            behavior: "smooth",
                        });
                    }}
                >
                    Achievements
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
                    if (volume) {
                        stop();
                    } else {
                        background();
                        click();
                    }
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
