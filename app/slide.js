import { motion } from "framer-motion";
import { Montserrat, Open_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const opensans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
});

const Slide = ({ date, name, type, images, videos }) => {
    const color =
        date === "2022"
            ? "bg-blue-500"
            : date === "2023"
            ? "bg-red-500"
            : "bg-green-500";
    return (
        <motion.div
            className="flex flex-row mt-[10vw] ml-[5vw] text-white relative z-0"
            viewport={{ once: true }}
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
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
                <div className={`${opensans.className} text-[3vw] mt-[1vh]`}>
                    {name}
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
                                className="h-[40vh] w-full object-cover object-[50%_25%] rounded-lg"
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
                            className="pt-[2vh] pb-[2vh] h-[40vh] w-full object-cover object-[50%_25%] rounded-lg"
                        />
                    )
                ) : (
                    <div
                        className="h-[40vh] w-full rounded-lg pt-[2vh] pb-[2vh]bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${images[0].src})`,
                        }}
                    />
                )}
            </div>
        </motion.div>
    );
};

export default Slide;
