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
    console.log(videos);
    return (
        <div className="flex flex-row mt-[10vw] ml-[5vw] text-white relative z-0">
            <div className={`${color} w-[50vw] h-[30vw] rounded-lg p-[1.5vw]`}>
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
                        <video
                            className="w-full h-full"
                            height={100}
                            playsInline
                            autoPlay
                            muted
                            loop
                        >
                            <source
                                src={
                                    "/achievements/projects/aerodynamic/A1.mp4"
                                }
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    ) : null
                ) : (
                    <Image />
                )}
            </div>
        </div>
    );
};

export default Slide;
