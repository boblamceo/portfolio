import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const Contact = ({ innerref }) => {
    return (
        <div
            ref={innerref}
            className="contact-bg w-screen h-[100vh] flex justify-center items-center"
        >
            <div className="flex justify-center items-center flex-col w-[70vw] h-screen ">
                <input
                    placeholder="Name"
                    className={`${montserrat.className} w-[60vw] m-[1vw] p-[1.5vw] text-[1vw] text-[#BBBBBB]  bg-[#363D47] focus:outline-none`}
                ></input>
                <input
                    placeholder="Email"
                    className={`${montserrat.className} w-[60vw] m-[1vw] p-[1.5vw] text-[1vw] text-[#BBBBBB]  bg-[#363D47] focus:outline-none`}
                ></input>
                <textarea
                    placeholder="Message"
                    className={`${montserrat.className} w-[60vw] m-[1vw] h-[30vh] p-[1.5vw] text-[1vw] text-[#BBBBBB]  bg-[#363D47] focus:outline-none resize-none`}
                ></textarea>
                <div
                    className={`w-[60vw] p-[1.5vw] m-[1vw] bg-white text-[1.5vw] text-black ${montserrat.className} text-center font-bold hover:cursor-pointer`}
                >
                    Submit
                </div>
            </div>
            <div className="flex justify-center items-center flex-col w-[30vw] h-screen"></div>
        </div>
    );
};

export default Contact;
