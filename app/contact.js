import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import React, { useState } from "react";
import MediaContact from "./mediaContact";
import {
    faGithub,
    faSlack,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const Contact = ({ innerref }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    return (
        <div
            ref={innerref}
            className="contact-bg w-screen h-[100vh] flex justify-center items-center"
        >
            <div className="flex justify-center items-center flex-col w-[70vw] h-screen ">
                <input
                    placeholder="Name"
                    className={`${montserrat.className} w-[65vw] m-[1vw] p-[1.5vw] text-[1vw] text-[#BBBBBB]  bg-[#363D47] focus:outline-none`}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                ></input>
                <input
                    placeholder="Subject"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={`${montserrat.className} w-[65vw] m-[1vw] p-[1.5vw] text-[1vw] text-[#BBBBBB]  bg-[#363D47] focus:outline-none`}
                ></input>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${montserrat.className} w-[65vw] m-[1vw] h-[30vh] p-[1.5vw] text-[1vw] text-[#BBBBBB]  bg-[#363D47] focus:outline-none resize-none`}
                ></textarea>
                <motion.a
                    className={`w-[65vw] p-[1.5vw] m-[1vw] bg-white text-[1.5vw] text-black ${montserrat.className} text-center font-extrabold hover:cursor-pointer`}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=boblam.ceo@gmail.com&su=From: ${name}, ${email}&body=${message}`}
                >
                    Submit
                </motion.a>
            </div>
            <div className="flex justify-center items-center flex-col w-[30vw] h-screen">
                <MediaContact
                    icon={faSlack}
                    title="Slack"
                    username="The Only Dino"
                    link="https://hackclub.slack.com/team/U07C53U6F1C"
                />{" "}
                <MediaContact
                    icon={faEnvelope}
                    title="Mail"
                    username="boblam.ceo@gmail.com"
                    link="https://mail.google.com/mail/u/0/?fs=1&to=boblam.ceo@gmail.com&tf=cm"
                />
                <MediaContact
                    icon={faGithub}
                    title="Github"
                    username="boblamceo"
                    link="https://github.com/boblamceo"
                />
                <MediaContact
                    icon={faYoutube}
                    title="Youtube"
                    username="The Only Dino"
                    link="https://www.youtube.com/@theonlydino2244/videos"
                />
            </div>
        </div>
    );
};

export default Contact;
