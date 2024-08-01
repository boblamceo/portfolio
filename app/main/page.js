"use client";

import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";
import Aerodynamic1 from "../../public/achivements/projects/aerodynamic/A1.jpg";
import Aerodynamic2 from "../../public/achivements/projects/aerodynamic/A2.jpg";
import Aerodynamic3 from "../../public/achivements/projects/aerodynamic/A3.jpg";
import Aerodynamic4 from "../../public/achivements/projects/aerodynamic/A4.png";
import Bin1 from "../../public/achivements/projects/binoculars/6.51.png";
import Bin2 from "../../public/achivements/projects/binoculars/6.52.png";
import Bin3 from "../../public/achivements/projects/binoculars/6.53.png";
import Bin4 from "../../public/achivements/projects/binoculars/6.54.png";
import Bin5 from "../../public/achivements/projects/binoculars/6.55.png";
import Bin6 from "../../public/achivements/projects/binoculars/6.56.png";
import Bin7 from "../../public/achivements/projects/binoculars/6.57.png";
import Smake from "../../public/achivements/projects/snake/smake.jpg";
import Zheng1 from "../../public/achivements/projects/tea/tea1.png";
import Zheng2 from "../../public/achivements/projects/tea/tea2.png";
import Zheng3 from "../../public/achivements/projects/tea/tea3.png";
import Zheng4 from "../../public/achivements/projects/tea/tea4.png";
import Teachable from "../../public/achivements/projects/teachable-machine/image.png";
import Tetris from "../../public/achivements/projects/tetris/image.png";
import Ticmoji from "../../public/achivements/projects/ticmoji/image.png";
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
        images: [Bin1, Bin2, Bin3, Bin4, Bin5, Bin6, Bin7],
        videos: [],
        description:
            "Binoculars is an app developed with React Native and submitted to the App Store. With Binoculars, you can see the weather from different locations, and be greeted with multiple animations and pictures that make the user feel relaxed. On this app, you can access a line chart, which you can change the data using the press of a button. It is easy to use and people of all ages can use it.",
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
            "This project is an Arduino game console. The gaming console is powered by a joystick, including the button press on the joystick. The gaming console has four games. The first is a drawing editor, with a cursor controlled by the joystick. The second is a game similar to the Chrome dinosaur game, with the 'i's being obstacles. The third is a maze game, where you have to make it to the bottom right corner. The last is a guessing game, where you have to guess a number in the least amount of tries possible, with the Arduino telling you if your guess is closer to the actual number than your previous guess.",
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
            "There are 5 buttons in this music player, and a buzzer. The button separated from the other four buttons is a music player, which plays a random song (Nokia ringtone, Mario, Harry Potter, Twinkle Twinkle Little Star, Godfather) every time you press it. The other buttons are a recording system. The button on the very right is the record button. If you press it, the arduino will start recording. The other three buttons are the notes C, D and E. To add a rest, press the record button. You can only record one take of 32 notes + rests. To reset, press the reset button on the Arduino.",
    },
];

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const Main = () => {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const [insideSize, setInsideSize] = useState(0);
    const [isVisible, setIsVisible] = useState("/about");
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const cursorSize = 15;

    const mouse = {
        x: useMotionValue(0),

        y: useMotionValue(0),
    };

    const smoothOptions = { damping: 70, stiffness: 300, mass: 8 };

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
        setInsideSize(1);
    };
    const manageMouseUp = (e) => {
        setInsideSize(0);
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
        if (window.scrollY < window.innerHeight + window.innerWidth * 0.13) {
            setIsVisible("/about");
        } else {
            setIsVisible("/projects");
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
                className="bg-slate-800 w-screen flex flex-col -z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
            >
                <Header page={isVisible} /> <About innerref={aboutRef} />{" "}
                <Projects innerref={projectsRef} />
                <div className="flex flex-row mb-[15vh]">
                    <div>
                        {projects.map((item) => (
                            <Slide {...item} className="" key={item.name} />
                        ))}
                    </div>
                    <div
                        className={`relative ${montserrat.className} ml-[2vw]`}
                    >
                        {projects.map((item) => (
                            <motion.div
                                className="text-white pt-[10vw] h-[40vw] sticky top-0 bg-slate-800 pr-[2vw] text-[1.5vw]"
                                viewport={{ once: true }}
                                initial={{ paddingLeft: "100%" }}
                                whileInView={{
                                    paddingLeft: 0,
                                }}
                                transition={{ duration: 2 }}
                                key={item.name}
                            >
                                {item.description}
                            </motion.div>
                        ))}
                    </div>
                </div>
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
