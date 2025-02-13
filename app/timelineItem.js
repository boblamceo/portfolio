import React, { useEffect, useRef, useState } from "react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import LightGallery from "lightgallery/react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { motion } from "framer-motion";
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const opensans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
});

const TimelineComp = ({ curr, index, setClickIn, clickIn }) => {
    const hoverRef = useRef(null);
    const [hover, setHover] = useState(false);
    const [galleryPress, setGalleryPress] = useState(false);
    useEffect(() => {
        if (galleryPress) {
            hoverRef.current.click();
        }
    }, [galleryPress]);
    return (
        <TimelineItem key={index}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
                className={`flex flex-row ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
            >
                <motion.div
                    initial={{
                        x: index % 2 === 1 ? "-100%" : "100%",
                        opacity: 0,
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="cursor-pointer border-white border-2 overflow-hidden relative"
                >
                    <LightGallery
                        plugins={[lgZoom, lgThumbnail]}
                        mode="lg-fade"
                        onBeforeOpen={() => {
                            setClickIn(true);
                        }}
                        onBeforeClose={() => {
                            setClickIn(false);
                            setGalleryPress(false);
                            setHover(false);
                        }}
                    >
                        {curr.images.map((image, imageIndex) => (
                            <a className="" data-src={image} key={image}>
                                <img
                                    className={`img-responsive ${
                                        imageIndex === 0
                                            ? "h-[40vw] w-[30vw]"
                                            : "max-h-0"
                                    }  hover:cursor-pointer hover:opacity-50 transition-all duration-100 ${
                                        hover
                                            ? "brightness-50"
                                            : "brightness-100"
                                    } `}
                                    src={image}
                                    ref={hoverRef}
                                ></img>
                            </a>
                        ))}
                    </LightGallery>
                    <div
                        className={`absolute w-[30vw] h-[40vw] top-0 `}
                        onMouseOver={() => {
                            if (!galleryPress) {
                                console.log(clickIn);
                                setHover(true);
                            }
                        }}
                        onMouseLeave={() => {
                            if (!galleryPress) {
                                console.log(clickIn);
                                setHover(false);
                            }
                        }}
                        onClick={() => {
                            setGalleryPress(true);
                        }}
                    >
                        <motion.div
                            className="absolute text-white w-[30vw] bg-black top-[calc(10vw+4px)] text-center"
                            animate={{
                                height: hover
                                    ? window.innerWidth * 0.28
                                    : window.innerWidth * 0.08,
                                top: hover
                                    ? window.innerWidth * 0.12 + 8
                                    : window.innerWidth * 0.32 + 8,
                            }}
                        >
                            <div
                                className={`${montserrat.className} text-[2.5vw] h-[8vw] text-center flex justify-center items-center `}
                            >
                                {curr.date}
                            </div>
                            <div
                                className={`h-[28vw] ${opensans.className} text-[1.5vw] px-[2vw]`}
                            >
                                {curr.description}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </TimelineContent>
        </TimelineItem>
    );
};

export default TimelineComp;
