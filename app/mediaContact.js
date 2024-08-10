import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const MediaContact = ({ icon, title, username, link }) => {
    return (
        <div className="w-[30vw] flex flex-row items-center mb-[2vw]">
            <div className="w-[6vw] h-[6vw] border-gray-400 border-[1px] flex justify-center items-center mr-[2vw]">
                <FontAwesomeIcon
                    icon={icon}
                    className="text-[3vw] text-gray-400"
                />
            </div>
            <div>
                <div
                    className={`${montserrat.className} text-[2vw] font-bold text-gray-400`}
                >
                    {title}
                </div>
                <div
                    className={`${montserrat.className} text-[1.5vw]  text-gray-400`}
                >
                    {username}
                </div>
            </div>
        </div>
    );
};

export default MediaContact;
