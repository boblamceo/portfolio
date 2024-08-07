import React, { useRef, useState, useEffect } from "react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import LightGallery from "lightgallery/react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const CCCThumb = "/achievements/awards/canadiancomputingcompetition.jpg";
const range = (val, min, max) => (val - min) / (max - min);
const Award = ({ curr, index }) => {
    const ref = useRef(null);
    const dummyRef = useRef(null);
    const handleScroll = () => {
        if (ref.current && dummyRef.current) {
            const elementTop = dummyRef.current.getBoundingClientRect().top;
            const top = elementTop + window.scrollY;
            if (elementTop < window.innerHeight) {
                const cardBottom = top + window.innerHeight;
                ref.current.style.opacity = 1 - range(scrollY, top, cardBottom);
            }
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <div className="absolute h-screen w-screen" ref={dummyRef}></div>
            <motion.div
                ref={ref}
                className={`w-screen flex flex-col ${
                    index % 2 === 0 ? "items-start" : "items-end"
                } p-[5vw] sticky top-0 h-screen`}
                style={{
                    opacity: 0,
                }}
                initial={{
                    x: index % 2 === 0 ? "-100%" : "100%",
                }}
                whileInView={{
                    x: 0,
                }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
            >
                {index === 10 ? (
                    <LightGallery
                        plugins={[lgZoom, lgThumbnail]}
                        mode="lg-fade"
                        onBeforeOpen={() => {
                            setClickIn(true);
                        }}
                        onBeforeClose={() => {
                            setClickIn(false);
                        }}
                    >
                        {curr.awards.map((image, imageIndex) => (
                            <a
                                className=" inline-block rounded-[1vw]"
                                data-src={image}
                                key={image}
                            >
                                <img
                                    className={`img-responsive ${
                                        imageIndex === 0
                                            ? "max-h-[50vh]"
                                            : "max-h-0"
                                    } rounded-[1vw] shadow-[0px_2vh_3vh_0.5vh_#fff] hover:cursor-pointer`}
                                    src={image}
                                ></img>
                            </a>
                        ))}
                    </LightGallery>
                ) : (
                    <LightGallery
                        plugins={[lgZoom, lgThumbnail]}
                        mode="lg-fade"
                        onBeforeOpen={() => {
                            setClickIn(true);
                        }}
                        onBeforeClose={() => {
                            setClickIn(false);
                        }}
                    >
                        <a
                            className="inline-block rounded-[1vw]"
                            data-src={curr.awards}
                            key={curr.awards}
                        >
                            <img
                                className="img-responsive max-h-[60vh] rounded-[1vw] hover:cursor-pointer shadow-[0px_2vh_3vh_0.5vh_#fff]"
                                src={index === 11 ? CCCThumb : curr.awards}
                            ></img>
                        </a>
                    </LightGallery>
                )}
                <div
                    className={`text-white ${
                        montserrat.className
                    } text-[2.5vh] h-[20vh] w-[40vw] ${
                        index % 2 === 0 ? "text-left" : "text-right"
                    } flex flex-col justify-end`}
                >
                    <div className="italic font-bold">{curr.date}</div>
                    {curr.details}
                </div>
            </motion.div>
        </>
    );
};

export default Award;
