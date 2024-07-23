import React from "react";
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const opensans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
});

const Header = () => {
    return (
        <div className={`flex flex-row p-[1.5vw] ${montserrat.className} `}>
            <h1 className={"text-[2vw] text-white"}>Bob Lam</h1>{" "}
            <div className="ml-[20vw] text-white">
                <div className={"text-[1vw]"}>About</div>
                <div className={"text-[1vw]"}>Projects</div>
                <div className={"text-[1vw]"}>Awards</div>
                <div className={"text-[1vw]"}>Contact</div>
            </div>
        </div>
    );
};

export default Header;
