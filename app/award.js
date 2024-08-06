import React, { useRef } from "react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import LightGallery from "lightgallery/react";
import { Montserrat, Open_Sans } from "next/font/google";

const Award = ({ curr, index }) => {
    const ref = useRef(null);
    const montserrat = Montserrat({
        subsets: ["latin"],
        display: "swap",
    });
    const opensans = Open_Sans({
        subsets: ["latin"],
        display: "swap",
    });
    return (
        <div
            ref={ref}
            className={`w-screen flex flex-col ${
                index % 2 === 0 ? "items-start" : "items-end"
            } p-[5vw] sticky top-0`}
            style={{
                opacity:
                    Math.abs(
                        ref.current.getBoundingClientRect() +
                            document.body.scrollTop
                    ) / window.innerHeight,
            }}
        >
            {index === 10 ? (
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
                <div className="italic font-bold    ">
                    {descriptions[index].date}
                </div>
                {descriptions[index].details}
            </div>
        </div>
    );
};

export default Award;
