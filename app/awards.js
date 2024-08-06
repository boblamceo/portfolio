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
const Coco1 = "/achievements/awards/coco1.jpg";
const Coco2 = "/achievements/awards/coco2.jpg";
const Coco3 = "/achievements/awards/coco3.jpg";
const Coco4 = "/achievements/awards/coco4.jpg";
const Coco5 = "/achievements/awards/coco5.jpg";
const Coco6 = "/achievements/awards/coco6.jpg";
const Coco7 = "/achievements/awards/coco7.jpg";
const Coco8 = "/achievements/awards/coco8.jpg";
const Coco9 = "/achievements/awards/coco9.jpg";
const Coco10 = "/achievements/awards/coco10.jpg";
const Coco11 = "/achievements/awards/coco11.jpg";
const Coco12 = "/achievements/awards/coco12.jpg";

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
    [
        Coco1,
        Coco2,
        Coco3,
        Coco4,
        Coco5,
        Coco6,
        Coco7,
        Coco8,
        Coco9,
        Coco10,
        Coco11,
        Coco12,
    ],
];

const Awards = ({ setClickIn }) => {
    return (
        <div>
            <div className="w-screen h-[100vh] awards-bg flex justify-center items-center">
                <motion.h1
                    className={`text-white font-bold ${montserrat.className} text-[8vw]`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    Awards
                </motion.h1>
            </div>

            {awards.map((curr, index) =>
                index === 13 ? (
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
                                className="m-[1vw] rounded-[1vw]"
                                data-src={image}
                                key={image}
                            >
                                <img
                                    className={`img-responsive  rounded-[1vw] shadow-[0px_2vh_3vh_0.5vh_#fff]`}
                                    src={image}
                                ></img>
                            </a>
                        ))}
                    </LightGallery>
                ) : (
                    <LightGallery
                        plugins={[lgZoom, lgThumbnail]}
                        width={`1000px`}
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
                            className="inline-block m-[1vw] rounded-[1vw]"
                            data-src={curr}
                            key={curr}
                        >
                            <img
                                className="img-responsive max-w-[40vw] rounded-[1vw] hover:cursor-pointer shadow-[0px_2vh_3vh_0.5vh_#fff]"
                                src={index === 0 ? CCCThumb : curr}
                            ></img>
                        </a>
                    </LightGallery>
                )
            )}
        </div>
    );
};

export default Awards;
