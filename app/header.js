"use client";

import React from "react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const Header = ({ page }) => {
    return (
        <motion.div
            className={`flex flex-row p-[1.5vw] ${montserrat.className} fixed top-0`}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
        >
            <h1 className={"text-[2vw] text-white"}>Bob Lam</h1>{" "}
            <ul className="ml-[20vw] text-white">
                <li
                    className={`text-[1vw] header-bt ${
                        page === "/about" && "font-bold"
                    }`}
                >
                    About
                </li>
                <li
                    className={`text-[1vw] header-bt ${
                        page === "/projects" && "font-bold"
                    }`}
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
