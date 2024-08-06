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

const Awards = () => {
    return (
        <div>
            {/* <div className="w-screen h-[100vh] awards-bg flex justify-center items-center">
                <motion.h1
                    className={`text-white font-bold ${montserrat.className} text-[8vw]`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    Awards
                </motion.h1>
            </div> */}

            <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
                <a
                    data-lg-size="1406-1390"
                    className="gallery-item"
                    data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"
                    data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
                >
                    <img
                        className="img-responsive"
                        src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                    />
                </a>
                <a
                    data-lg-size="1400-1400"
                    data-pinterest-text="Shinimamiya, Osaka, Japan"
                    data-tweet-text="Shinimamiya, Osaka, Japan"
                    className="gallery-item"
                    data-src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                    data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"
                >
                    <img
                        className="img-responsive"
                        src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                    />
                </a>
                <a
                    data-lg-size="1400-1400"
                    className="gallery-item"
                    data-src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                    data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
                >
                    <img
                        className="img-responsive"
                        src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                    />
                </a>
                <a
                    data-lg-size="1400-1400"
                    className="gallery-item"
                    data-iframe="true"
                    data-src="https://www.lightgalleryjs.com/pdf/sample.pdf"
                >
                    <img
                        className="img-responsive"
                        src="https://images.unsplash.com/photo-1455541504462-57ebb2a9cec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&q=80"
                    />
                </a>
                <a
                    className="gallery-item"
                    data-src="https://www.youtube.com/watch?v=egyIeygdS_E&mute=0"
                    key="4"
                >
                    <img
                        style={{ maxWidth: "400px" }}
                        className="img-responsive"
                        alt=""
                        src="https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg"
                    />
                </a>
            </LightGallery>
            {/* 
            {awards.map((curr, index) =>
                index === 13 ? (
                    <LightGallery
                        plugins={[lgZoom, lgThumbnail]}
                        mode="lg-fade"
                        onInit={() => {
                            console.log("hi");
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
            )} */}
        </div>
    );
};

export default Awards;
