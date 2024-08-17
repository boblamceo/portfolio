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
                } `}
            >
                <div className="cursor-pointer border-white border-2">
                    <LightGallery
                        plugins={[lgZoom, lgThumbnail]}
                        mode="lg-fade"
                        onBeforeOpen={() => {
                            setClickIn(true);
                        }}
                        onBeforeClose={() => {
                            setClickIn(false);
                            setGalleryPress(false);
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
                                            ? "brightness-75"
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
                        onMouseEnter={() => {
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
                            className="absolute text-white w-[30vw] bg-black border-x-2 border-white top-[calc(10vw+4px)]"
                            animate={{
                                height: hover
                                    ? window.innerWidth * 0.3
                                    : window.innerWidth * 0.1,
                                top: hover
                                    ? window.innerWidth * 0.1 + 4
                                    : window.innerWidth * 0.3 + 4,
                            }}
                        >
                            hi
                        </motion.div>
                    </div>
                </div>
            </TimelineContent>
        </TimelineItem>
    );
};

export default TimelineComp;
