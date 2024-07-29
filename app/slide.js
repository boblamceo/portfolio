import { Montserrat, Open_Sans } from "next/font/google";
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
    return (
        <div className="flex flex-row mt-[10vw] ml-[5vw] text-white relative z-0">
            <div
                className={`bg-blue-500 w-[50vw] h-[30vw] rounded-lg p-[1.5vw]`}
            >
                <div className="flex flex-row justify-between">
                    <div className={`text-[1vw] ${montserrat.className}`}>
                        {date}
                    </div>
                    <div className={`text-[1vw] ${montserrat.className}`}>
                        {type}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;
