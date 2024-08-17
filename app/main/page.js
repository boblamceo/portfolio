"use client";

import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";
import Aerodynamic1 from "../../public/achievements/projects/aerodynamic/A1.jpg";
import Aerodynamic2 from "../../public/achievements/projects/aerodynamic/A2.jpg";
import Aerodynamic3 from "../../public/achievements/projects/aerodynamic/A3.jpg";
import Aerodynamic4 from "../../public/achievements/projects/aerodynamic/A4.png";
import Bin1 from "../../public/achievements/projects/binoculars/6.51.png";
import Bin2 from "../../public/achievements/projects/binoculars/6.52.png";
import Bin3 from "../../public/achievements/projects/binoculars/6.53.png";
import Bin4 from "../../public/achievements/projects/binoculars/6.54.png";
import Bin5 from "../../public/achievements/projects/binoculars/6.55.png";
import Bin6 from "../../public/achievements/projects/binoculars/6.56.png";
import Bin7 from "../../public/achievements/projects/binoculars/6.57.png";
import Bin8 from "../../public/achievements/projects/binoculars/6.58.jpg";
import Bin9 from "../../public/achievements/projects/binoculars/6.59.jpg";
import Bin10 from "../../public/achievements/projects/binoculars/6.510.jpg";
import Smake from "../../public/achievements/projects/snake/smake.jpg";
import Zheng1 from "../../public/achievements/projects/tea/tea1.png";
import Zheng2 from "../../public/achievements/projects/tea/tea2.png";
import Zheng3 from "../../public/achievements/projects/tea/tea3.png";
import Zheng4 from "../../public/achievements/projects/tea/tea4.png";
import Teachable from "../../public/achievements/projects/teachable-machine/image.png";
import Tetris from "../../public/achievements/projects/tetris/image.png";
import Ticmoji from "../../public/achievements/projects/ticmoji/image.png";
import WoopThumb from "../../public/achievements/projects/woop/image.png";
import Woop from "../../public/woop.mp4";
import loadingsrc from "../../public/loading.gif";
import About from "../aboutPage";
import Header from "../header";
import Projects from "../projectPage";
import Slide from "../slide";
import AerodynamicVid1 from "/public/A1.mp4";
import AerodynamicVid2 from "/public/A2.mp4";
import AerodynamicVid3 from "/public/A3.mp4";
import Fan from "/public/IMG_2104.mp4";
import NightLight from "/public/IMG_2122.mp4";
import Game1 from "/public/IMG_2128.mp4";
import Game3 from "/public/IMG_2130.mp4";
import Game4 from "/public/IMG_2131.mp4";
import Clapclock from "/public/IMG_6487.mp4";
import Game2 from "/public/Video - 2024-07-17 3_18_39 PM.mp4";
import { Montserrat } from "next/font/google";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Awards from "../awards";
import Contact from "../contact";
import Timeline from "../timeline";
import TimelineBody from "../timelineBody";

const projects = [
    {
        date: "2022",
        name: "Smake",
        type: "Game",
        images: [Smake],
        videos: [],
        description:
            "A normal snake game - the first game I ever made using Javascript! To play, press space and use arrow keys. The features of this game include a range of death messages and background music.",
    },
    {
        date: "2022",
        name: "Binoculars",
        type: "App",
        images: [Bin1, Bin2, Bin3, Bin4, Bin5, Bin6, Bin7, Bin8, Bin9, Bin10],
        videos: [],
        description:
            "Binoculars is a weather app developed with React Native and submitted to the App Store. With Binoculars, you can see the weather from different locations with a relaxing UI. It is easy to use, and loaded with global weather information.",
    },
    {
        date: "2023",
        name: "Zhengde Tea",
        type: "App",
        images: [Zheng1, Zheng2, Zheng3, Zheng4],
        videos: [],
        description:
            "Also made with React Native and submitted to the App Store, Zhengde Tea is an e-commerce application that sells tea. It has a quick and fast user experience, with the purchasing process as simple as a few clicks.",
    },
    {
        date: "2023",
        name: "Aerodynamic",
        type: "Crypto / App",
        images: [Aerodynamic1, Aerodynamic2, Aerodynamic3, Aerodynamic4],
        videos: [AerodynamicVid1, AerodynamicVid2, AerodynamicVid3],
        description:
            "Aerodynamic is a futuristic and modern app that is one of the only apps that focuses on allowing users to exchange crypto with different products like tea, horses, and paintings. It combines technologies like crypto and app development with products around the world, giving you a hybrid rollercoaster of things to enjoy while using the app. The app isn't on the app store yet, due to the legal complications of crypto.",
    },
    {
        date: "2024",
        name: "Tetris",
        type: "AI / Game",
        images: [Tetris],
        videos: [],
        description:
            "This is just a simple game of Tetris, right? The twist of this Tetris game is that it is powered by a handpose model that can track the direction of your hand. Due to the large model, it may take some time to load.",
    },
    {
        date: "2024",
        name: "Regression",
        type: "AI",
        images: [WoopThumb],
        videos: [Woop],
        description:
            "This HTML and JS program uses a self-made tensorflow neural network to see if me wearing a green shirt is in the frame. It gets the colors of the pixels on screen, and puts them in a matrix for the model.",
    },
    {
        date: "2024",
        name: "Teachable Machine",
        type: "AI",
        images: [Teachable],
        videos: [],
        description:
            "I recreated Google's teachable machine using HTML and Javascript. It uses transfer learning to use the data from a model called Mobilenet to identify custom objects, like a green book with a big grey square.",
    },
    {
        date: "2024",
        name: "Ticmoji",
        type: "AI / Game",
        images: [Ticmoji],
        videos: [],
        description:
            "Continuing with the recurring theme of adding Machine Learning twists to classic games, this is a game of tic tac toe, but you make the facial expression of the corresponding square to play a move. It uses a face-landmark model to detect the face landmarks on your face, and guess your facial expression.",
    },
    {
        date: "2024",
        name: "RC Fan",
        type: "Robotics",
        images: [],
        videos: [Fan],
        description:
            "This is one of my first robotics projects. It is a fan that is controlled by a remote controller, and run with an Arduino. During this project, I learned about the Arduino language, which is similar to C and C++.",
    },
    {
        date: "2024",
        name: "Night Light",
        type: "Robotics",
        images: [],
        videos: [NightLight],
        description:
            "This is a night light I made using Arduino, with a photocell resistor to detect how much light is surrounding the resistor.",
    },
    {
        date: "2024",
        name: "Game Console",
        type: "Robotics",
        images: [],
        videos: [Game1, Game2, Game3, Game4],
        description:
            "This project is an Arduino game console. The gaming console is powered by a joystick, with a LCD 1602 module to display the game. The gaming console has four games: a drawing game, a chrome dinosaur-inspired game, a maze game, and a guessing game.",
    },
    {
        date: "2024",
        name: "Clap-powered Clock",
        type: "Robotics",
        images: [],
        videos: [Clapclock],
        description:
            "This is a clock I made using an Arduino Mega 2560. To turn it on and off, you can clap twice in quick succession. In this project I used a sound sensor module to detect the volume, and compared the current volume to background volume to detect if the sound was a clap or background noise.",
    },
    {
        date: "2024",
        name: "Music Machine",
        type: "Robotics",
        images: [],
        videos: ["https://www.youtube.com/embed/yGQrKJ_FCnc"],
        description:
            "There are 5 buttons in this music player, and a buzzer. The button separated from the other four buttons is a music player, which plays a random song every time you press it. The other buttons are a recording system, where you can make music with only four buttons.",
    },
];

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

let clickIn = false;

const Main = () => {
    const [insideSize, setInsideSize] = useState(0);
    const [isVisible, setIsVisible] = useState("/about");
    const contactRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const achievementsRef = useRef(null);
    const timelineRef = useRef(null);
    const setClickIn = (newValue) => {
        clickIn = newValue;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const cursorSize = 15;

    const mouse = {
        x: useMotionValue(0),

        y: useMotionValue(0),
    };

    const smoothOptions = { damping: 80, stiffness: 300, mass: 8 };

    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),

        y: useSpring(mouse.y, smoothOptions),
    };

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;

        mouse.x.set(clientX - cursorSize / 2);

        mouse.y.set(clientY - cursorSize / 2);
    };

    const manageMouseClick = (e) => {
        if (!clickIn) {
            setInsideSize(1);
        }
    };
    const manageMouseUp = (e) => {
        if (!clickIn) {
            setInsideSize(0);
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        window.addEventListener("mousedown", manageMouseClick);
        window.addEventListener("mouseup", manageMouseUp);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.removeEventListener("mousedown", manageMouseClick);
            window.removeEventListener("mouseup", manageMouseUp);
        };
    }, []);

    const handleScroll = () => {
        let contactTop;
        let projectstop;
        let achievementstop;
        let timelinetop;
        if (contactRef.current) {
            contactTop = contactRef.current.getBoundingClientRect().top;
        }
        if (timelineRef.current) {
            timelinetop = timelineRef.current.getBoundingClientRect().top;
        }
        if (projectsRef.current) {
            projectstop = projectsRef.current.getBoundingClientRect().top;
        }
        if (achievementsRef.current) {
            achievementstop =
                achievementsRef.current.getBoundingClientRect().top;
        }
        if (contactTop <= 1) {
            setIsVisible("/contact");
        } else if (achievementstop <= 1) {
            setIsVisible("/awards");
        } else if (projectstop <= 1) {
            setIsVisible("/projects");
        } else if (timelinetop <= 1) {
            setIsVisible("/timeline");
        } else {
            setIsVisible("/about");
        }
    };

    return (
        <Suspense
            fallback={
                <div className="w-screen h-screen flex justify-center items-center  bg-slate-800">
                    <Image src={loadingsrc} className="w-[10vw]" />
                </div>
            }
        >
            <motion.div
                className="bg-slate-800 w-screen flex flex-col -z-20 overflow-x-clip"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
            >
                <Header
                    page={isVisible}
                    contactRef={contactRef}
                    aboutRef={aboutRef}
                    projectsRef={projectsRef}
                    achievementsRef={achievementsRef}
                    timelineRef={timelineRef}
                />{" "}
                <About innerref={aboutRef} />{" "}
                <Timeline innerref={timelineRef} />
                <TimelineBody setClickIn={setClickIn} />
                <Projects innerref={projectsRef} />
                <div className="flex flex-row mb-[15vh]">
                    <div>
                        {projects.map((item) => (
                            <Slide {...item} className="" key={item.name} />
                        ))}
                    </div>
                    <div
                        className={`relative ${montserrat.className} ml-[5vw]`}
                    >
                        {projects.map((item) => (
                            <div
                                className="text-white pt-[10vw] h-[40vw] sticky top-0 bg-slate-800 pr-[5vw] text-[1.3vw]"
                                key={item.name}
                            >
                                {item.description}
                            </div>
                        ))}
                    </div>
                </div>
                <Awards setClickIn={setClickIn} innerref={achievementsRef} />
                <Contact innerref={contactRef} />
            </motion.div>
            <motion.div
                className="w-[4vw] h-[4vw] border-[1px] rounded-full border-white fixed ml-5 mt-5"
                style={{
                    left: smoothMouse.x,
                    top: smoothMouse.y,
                }}
            ></motion.div>
            <motion.div
                className="w-[4vw] h-[4vw] border-[1px] rounded-full bg-white fixed ml-5 mt-5"
                style={{
                    left: smoothMouse.x,
                    top: smoothMouse.y,
                }}
                animate={{
                    scale: insideSize,
                }}
                transition={{
                    duration: 0.3,
                }}
            ></motion.div>
        </Suspense>
    );
};

export default Main;
