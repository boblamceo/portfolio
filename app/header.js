"use client";

import React, { useEffect } from "react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import useSound from "use-sound";
import backgroundMusic from "../public/rachmaninoff.mp3";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const Header = ({ page }) => {
    const [background] = useSound(backgroundMusic);
    useEffect(() => {
        background();
    }, []);
    return (
        <motion.div
            className={`flex flex-row p-[1.5vw] ${montserrat.className} fixed top-0 z-10`}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
        >
            <h1 className={"text-[2vw] text-white"}>Bob Lam</h1>{" "}
            <ul className="ml-[20vw] text-white">
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
        </motion.div>
    );
};

export default Header;
