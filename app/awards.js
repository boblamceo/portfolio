import { motion } from "framer-motion";
import LightGallery from "lightgallery/react";
import { Montserrat } from "next/font/google";
import React from "react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgVideo from "lightgallery/plugins/video";
import "lightgallery/css/lg-video.css";

const CCC = "/achievements/awards/canadiancomputingcompetition.pdf";
const CCCThumb = "/achievements/awards/canadiancomputingcompetition.jpg";
const CMC = "/achievements/awards/canadianmathcompetition.jpg";
const Cath = "/achievements/awards/cathcon.jpg";
const Quest1 = "/achievements/awards/codingquest2023.jpg";
const Quest2 = "/achievements/awards/codingquest2024.jpg";
const HKMKC1 = "/achievements/awards/HKMKC2022.jpg";
const HKMKC2 = "/achievements/awards/HKMKC2023.jpg";
const HKMKC3 = "/achievements/awards/HKMKC2024.jpg";
const Sasmo = "/achievements/awards/sasmo2022.jpg";
const Theory = "/achievements/awards/Theory5.jpg";
const Violin1 = "/achievements/awards/Violin5.jpeg";
const Violin2 = "/achievements/awards/Violin6.jpg";
const Violin3 = "/achievements/awards/Violin8.jpg";
const Coco2 = "/achievements/awards/coco2.jpg";
const Coco4 = "/achievements/awards/coco4.jpg";
const Coco10 = "/achievements/awards/coco10.jpg";
const Coco11 = "/achievements/awards/coco11.jpg";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const awards = [
    CCC,
    CMC,
    Cath,
    Quest1,
    Quest2,
    HKMKC1,
    HKMKC2,
    HKMKC3,
    Sasmo,
    Theory,
    Violin1,
    Violin2,
    Violin3,
    [Coco2, Coco4, Coco10, Coco11],
];

const descriptions = [
    {
        details:
            "Canadian Computing Competition - A global programming competition from the University of Waterloo designed for secondary students.",
        date: 2024,
    },
    {
        details:
            "Canada Jay Mathematical Competition - A worldwide mathematics competition from the University of Waterloo designed for secondary students.",
        date: 2022,
    },
    {
        details:
            "CathCON - An online hackathon organised by The Cathedral and John Connon School.",
        date: 2023,
    },
    {
        details:
            "Coding Quest - An online hackathon run annually for secondary students.",
        date: 2023,
    },
    {
        details:
            "Coding Quest - An online hackathon run annually for secondary students.",
        date: 2024,
    },
    {
        details:
            "Hong Kong Mathematics Kangaroo Contest - The Hong Kong branch of one of the biggest mathematics competitions in the world (MKC). ",
        date: 2022,
    },
    {
        details:
            "Hong Kong Mathematics Kangaroo Contest - The Hong Kong branch of one of the biggest mathematics competitions in the world (MKC). ",
        date: 2023,
    },
    {
        details:
            "Hong Kong Mathematics Kangaroo Contest - The Hong Kong branch of one of the biggest mathematics competitions in the world (MKC). ",
        date: 2024,
    },
    {
        details:
            "Singapore and Asian Schools Math Olympiad - A mathematics competition focused on secondary schools in Asia.",
        date: 2022,
    },
    {
        details:
            "The Associated Board of the Royal Schools of Music - A charity with exams for a wide range of instruments since 1889. The exam I took is for Grade 5 Music Theory.",
        date: 2022,
    },
    {
        details:
            "The Associated Board of the Royal Schools of Music - A charity with exams for a wide range of instruments since 1889. The exam I took is for Violin Performance Grade 5.",
        date: 2021,
    },
    {
        details:
            "The Associated Board of the Royal Schools of Music - A charity with exams for a wide range of instruments since 1889. The exam I took is for Violin Performance Grade 6.",
        date: 2022,
    },
    {
        details:
            "The Associated Board of the Royal Schools of Music - A charity with exams for a wide range of instruments since 1889. The exam I took is for Violin Performance Grade 8.",
        date: 2023,
    },
];

const Awards = ({ setClickIn }) => {
    return (
        <div>
            <div className="w-screen h-[100vh] awards-bg flex justify-center items-center mb-[10vh]">
                <motion.h1
                    className={`text-white font-bold ${montserrat.className} text-[8vw]`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    Awards
                </motion.h1>
            </div>

            {awards.map((curr, index) => (
                <div
                    key={index}
                    className={`w-screen flex flex-col ${
                        index % 2 === 0 ? "items-start" : "items-end"
                    } p-[5vw]`}
                >
                    {index === 13 ? (
                        <LightGallery
                            plugins={[lgZoom, lgThumbnail]}
                            mode="lg-fade"
                            onInit={() => {
                                console.log("hi");
                            }}
                            onBeforeOpen={() => {
                                setClickIn(true);
                            }}
                            onBeforeClose={() => {
                                setClickIn(false);
                            }}
                        >
                            {curr.map((image, imageIndex) => (
                                <a
                                    className=" inline-block rounded-[1vw]"
                                    data-src={image}
                                    key={image}
                                >
                                    <img
                                        className={`img-responsive ${
                                            imageIndex === 0
                                                ? "max-w-[40vw]"
                                                : "max-w-0"
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
                            onInit={() => {
                                console.log("hi");
                            }}
                            onBeforeOpen={() => {
                                setClickIn(true);
                            }}
                            onBeforeClose={() => {
                                setClickIn(false);
                            }}
                        >
                            <a
                                className="inline-block rounded-[1vw]"
                                data-src={curr}
                                key={curr}
                            >
                                <img
                                    className="img-responsive max-w-[40vw] rounded-[1vw] hover:cursor-pointer shadow-[0px_2vh_3vh_0.5vh_#fff]"
                                    src={index === 0 ? CCCThumb : curr}
                                ></img>
                            </a>
                        </LightGallery>
                    )}
                    <div className="text-white"> ahpfoiuwh</div>
                </div>
            ))}
        </div>
    );
};

export default Awards;
