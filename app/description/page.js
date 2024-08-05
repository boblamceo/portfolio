"use client";
import { Montserrat, Open_Sans } from "next/font/google";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import Header from "../header";
import Gallery from "./Gallery";
import { motion } from "framer-motion";

const Aerodynamic2 = "/achivements/projects/aerodynamic/A2.jpg";
const Aerodynamic1 = "/achivements/projects/aerodynamic/A1.jpg";
const Aerodynamic3 = "/achivements/projects/aerodynamic/A3.jpg";
const Aerodynamic4 = "/achivements/projects/aerodynamic/A4.png";
const Bin1 = "/achivements/projects/binoculars/6.51.png";
const Bin2 = "/achivements/projects/binoculars/6.52.png";
const Bin3 = "/achivements/projects/binoculars/6.53.png";
const Bin4 = "/achivements/projects/binoculars/6.54.png";
const Bin5 = "/achivements/projects/binoculars/6.55.png";
const Bin6 = "/achivements/projects/binoculars/6.56.png";
const Bin7 = "/achivements/projects/binoculars/6.57.png";
const Smake = "/achivements/projects/snake/smake.jpg";
const Zheng1 = "/achivements/projects/tea/tea1.png";
const Zheng2 = "/achivements/projects/tea/tea2.png";
const Zheng3 = "/achivements/projects/tea/tea3.png";
const Zheng4 = "/achivements/projects/tea/tea4.png";
const Teachable = "/achivements/projects/teachable-machine/image.png";
const Tetris = "/achivements/projects/tetris/image.png";
const Ticmoji = "/achivements/projects/ticmoji/image.png";
const AerodynamicVid1 = "https://www.youtube.com/watch?v=jdHji-E6Gbc";
const AerodynamicVid2 = "https://www.youtube.com/watch?v=z23Bj78lOOI";
const AerodynamicVid3 = "https://www.youtube.com/watch?v=PuU-5FhJG9s";
const Fan = "https://www.youtube.com/watch?v=QDHf01-FIxQ";
const NightLight = "https://www.youtube.com/watch?v=cf8-2NtZLCQ";
const Game1 = "https://www.youtube.com/watch?v=EmOJRdUiW9I";
const Game3 = "https://www.youtube.com/watch?v=JDgl5uxW_j0";
const Game4 = "https://www.youtube.com/watch?v=6vuk56JNBAk";
const Clapclock = "https://www.youtube.com/watch?v=wrt1Tu5RpBg";
const Game2 = "https://www.youtube.com/watch?v=U8qCZ8EP3Oo";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const opensans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
});

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

const Description = () => {
    const searchParams = useSearchParams();

    const name = searchParams.get("name");
    const { date, type, images, videos, description } = projects.filter(
        (curr) => curr.name === name
    )[0];

    return (
        <div className="bg-slate-900 w-screen pb-[3vh]">
            <Header page="/projects" />
            <motion.h1
                className={`${montserrat.className} text-[6vw] inline-block bg-clip-text bg-gradient-to-r text-transparent mt-[5vw] ml-[5vw] description-background`}
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2 }}
            >
                {name}
            </motion.h1>
            <br />
            <motion.div
                className={`${opensans.className} text-[3vw] inline-block bg-clip-text text-transparent ml-[10vw] description-background w-[80vw]`}
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2 }}
            >
                {description}
            </motion.div>
            <Gallery images={images} videos={videos} />
        </div>
    );
};

export default Description;
