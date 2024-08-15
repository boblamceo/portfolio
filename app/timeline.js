import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const Timeline = ({ innerref }) => {
    return (
        <div
            ref={innerref}
            className="timeline-bg w-screen bg-black flex justify-center items-center h-screen text-white"
        >
            <motion.h1
                className={`text-white font-bold ${montserrat.className} text-[8vw] flex items-end`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                Timeline
            </motion.h1>
        </div>
    );
};

export default Timeline;
