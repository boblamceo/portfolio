import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const Awards = () => {
    return (
        <div className="w-screen h-[100vh] awards-bg flex justify-center items-center">
            <motion.h1
                className={`text-white font-bold ${montserrat.className} text-[8vw] h-[60vh] flex items-end`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                Awards
            </motion.h1>
        </div>
    );
};

export default Awards;
