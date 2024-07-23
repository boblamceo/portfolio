"use client";

import React from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const Header = () => {
    const pathname = usePathname();
    return (
        <div className={`flex flex-row p-[1.5vw] ${montserrat.className} `}>
            <h1 className={"text-[2vw] text-white"}>Bob Lam</h1>{" "}
            <ul className="ml-[20vw] text-white">
                <li
                    className={`text-[1vw] header-bt ${
                        pathname === "/about" && "font-bold"
                    }`}
                >
                    About
                </li>
                <li
                    className={`text-[1vw] header-bt ${
                        pathname === "/projects" && "font-bold"
                    }`}
                >
                    Projects
                </li>
                <li
                    className={`text-[1vw] header-bt ${
                        pathname === "/awards" && "font-bold"
                    }`}
                >
                    Awards
                </li>
                <li
                    className={`text-[1vw] header-bt ${
                        pathname === "/contact" && "font-bold"
                    }`}
                >
                    Contact
                </li>
            </ul>
        </div>
    );
};

export default Header;
