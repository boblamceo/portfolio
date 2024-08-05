import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import React from "react";

const CCC = "/achievements/awards/canadiancomputingcompetition.pdf";
const CMC = "/achievements/awards/canadianmathcompetition.jpg";
const Cath = "/achievements/awards/cathcon.jpg";
const Quest1 = "/achievements/awards/codingquest2023.jpg";
const Quest2 = "/achievements/awards/codingquest2024.pdf";
const HKMKC1 = "/achievements/awards/HKMKC2022.jpg";
const HKMKC2 = "/achievements/awards/HKMKC2023.jpg";
const HKMKC3 = "/achievements/awards/HKMKC2024.jpg";
const Sasmo = "/achievements/awards/sasmo2022.jpg";
const Theory = "/achievements/awards/Theory5.jpg";
const Violin1 = "/achievements/awards/Violin5.jpg";
const Violin2 = "/achievements/awards/Violin6.jpg";
const Violin3 = "/achievements/awards/Violin8.jpg";
const Coco1 = "/achievements/awards/coco1.jpg";
const Coco2 = "/achievements/awards/coco2.jpg";
const Coco3 = "/achievements/awards/coco3.jpg";
const Coco4 = "/achievements/awards/coco4.jpg";
const Coco5 = "/achievements/awards/coco5.jpg";
const Coco6 = "/achievements/awards/coco6.jpg";
const Coco7 = "/achievements/awards/coco7.jpg";
const Coco8 = "/achievements/awards/coco8.jpg";
const Coco9 = "/achievements/awards/coco9.jpg";
const Coco10 = "/achievements/awards/coco10.jpg";
const Coco11 = "/achievements/awards/coco11.jpg";
const Coco12 = "/achievements/awards/coco12.jpg";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const Awards = () => {
    return (
        <div>
            <div className="w-screen h-[100vh] awards-bg flex justify-center items-center">
                <motion.h1
                    className={`text-white font-bold ${montserrat.className} text-[8vw]`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    Awards
                </motion.h1>
            </div>
            <div>hi</div>
        </div>
    );
};

export default Awards;
