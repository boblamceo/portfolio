import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import React, { useState } from "react";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const MediaContact = ({ icon, title, username, link }) => {
    const [hover, setHover] = useState(false);
    return (
        <a
            className="w-[30vw] flex flex-row items-center mt-[2vw] h-[6vw] cursor-pointer"
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
            href={link}
            target={link && "_blank"}
        >
            <motion.div
                className="w-[6vw] h-[6vw]  border-gray-400 border-[1px] flex justify-center items-center mr-[2vw]"
                initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                animate={{
                    backgroundColor: hover
                        ? "rgba(255, 255, 255, 1)"
                        : "rgba(0, 0, 0, 0)",
                }}
            >
                <FontAwesomeIcon
                    icon={icon}
                    className={`text-[3vw] ${
                        hover ? "text-black" : "text-gray-400"
                    } transition-all duration-100`}
                />
            </motion.div>
            <div>
                <motion.div
                    className={`${montserrat.className} text-[2vw] font-bold`}
                    initial={{
                        color: "rgb(156,163,175)",
                    }}
                    animate={{
                        color: hover ? "white" : "rgb(156,163,175)",
                    }}
                >
                    {title}
                </motion.div>
                <div
                    className={`${montserrat.className} text-[1.5vw]  text-gray-400`}
                >
                    {username}
                </div>
            </div>
        </a>
    );
};

export default MediaContact;
