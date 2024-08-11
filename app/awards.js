import { motion } from "framer-motion";
import { Montserrat, Open_Sans } from "next/font/google";
import React from "react";
import Award from "./award";

const CCC = "/achievements/awards/canadiancomputingcompetition.pdf";
const CMC = "/achievements/awards/canadianmathcompetition.jpg";
const Cath = "/achievements/awards/cathcon.jpg";
const Quest1 = "/achievements/awards/codingquest2023.jpg";
const Quest2 = "/achievements/awards/codingquest2024.jpg";
const HKMKC1 = "/achievements/awards/HKMKC2022.jpg";
const HKMKC2 = "/achievements/awards/HKMKC2023.jpg";
const HKMKC3 = "/achievements/awards/HKMKC2024.jpg";
const Sasmo = "/achievements/awards/sasmo2022.jpg";
const Theory = "/achievements/awards/Theory5.jpg";
const Violin1 = "/achievements/awards/Violin5.jpeg";
const Violin2 = "/achievements/awards/Violin6.jpg";
const Violin3 = "/achievements/awards/Violin8.jpg";
const Coco2 = "/achievements/awards/coco2.JPG";
const Coco4 = "/achievements/awards/coco4.JPG";
const Coco10 = "/achievements/awards/coco10.JPG";
const Coco11 = "/achievements/awards/coco11.JPG";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});
const opensans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
});

const awards = [
    CCC,
    CMC,
    Cath,
    Quest1,
    Quest2,
    HKMKC1,
    HKMKC2,
    HKMKC3,
    Sasmo,
    Theory,
    Violin1,
    Violin2,
    Violin3,
    [Coco2, Coco4, Coco10, Coco11],
];

const descriptions = [
    {
        details:
            "Canadian Computing Competition - A global programming competition from the University of Waterloo designed for secondary students.",
        date: 2024,
    },
    {
        details:
            "Canada Jay Mathematical Competition - A worldwide mathematics competition from the University of Waterloo designed for secondary students.",
        date: 2022,
    },
    {
        details:
            "CathCON - An online hackathon organised by The Cathedral and John Connon School.",
        date: 2023,
    },
    {
        details:
            "Coding Quest - An online hackathon run annually for secondary students.",
        date: 2023,
    },
    {
        details:
            "Coding Quest - An online hackathon run annually for secondary students.",
        date: 2024,
    },
    {
        details:
            "Hong Kong Mathematics Kangaroo Contest - The Hong Kong branch of one of the biggest mathematics competitions in the world (MKC). ",
        date: 2022,
    },
    {
        details:
            "Hong Kong Mathematics Kangaroo Contest - The Hong Kong branch of one of the biggest mathematics competitions in the world (MKC). ",
        date: 2023,
    },
    {
        details:
            "Hong Kong Mathematics Kangaroo Contest - The Hong Kong branch of one of the biggest mathematics competitions in the world (MKC). ",
        date: 2024,
    },
    {
        details:
            "Singapore and Asian Schools Math Olympiad - A mathematics competition focused on secondary schools in Asia.",
        date: 2022,
    },
    {
        details:
            "The Associated Board of the Royal Schools of Music - A charity with exams for a wide range of instruments since 1889. The exam I took is for Grade 5 Music Theory.",
        date: 2022,
    },
    {
        details:
            "The Associated Board of the Royal Schools of Music - A charity with exams for a wide range of instruments since 1889. The exam I took is for Violin Performance Grade 5.",
        date: 2021,
    },
    {
        details:
            "The Associated Board of the Royal Schools of Music - A charity with exams for a wide range of instruments since 1889. The exam I took is for Violin Performance Grade 6.",
        date: 2022,
    },
    {
        details:
            "The Associated Board of the Royal Schools of Music - A charity with exams for a wide range of instruments since 1889. The exam I took is for Violin Performance Grade 8.",
        date: 2023,
    },
    {
        details:
            "ESF Coco - A computing conference hosted by students, including a hackathon.",
        date: 2023,
    },
]
    .map((curr, index) => {
        return { ...curr, awards: awards[index] };
    })
    .sort((a, b) => a.date - b.date);

const Awards = ({ setClickIn }) => {
    return (
        <div>
            <div className="w-screen h-[100vh] awards-bg flex justify-center items-center mb-[10vh]">
                <motion.h1
                    className={`text-white font-bold ${montserrat.className} text-[8vw]`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    Achievements
                </motion.h1>
            </div>

            {descriptions.map((curr, index) => (
                <Award curr={curr} index={index} key={index} />
            ))}
        </div>
    );
};

export default Awards;
