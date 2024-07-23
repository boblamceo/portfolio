import React from "react";
import Header from "../header";

const About = () => {
    return (
        <div className="bg-slate-800 w-screen h-screen overflow-x-hidden flex whitespace-nowrap scrollbar-hide">
            <div className="about-bg w-screen h-[120%] brightness-100 backdrop-brightness-0">
                <Header />
            </div>
        </div>
    );
};

export default About;
