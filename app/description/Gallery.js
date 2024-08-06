import React, { useEffect, useState } from "react";
import LightGallery from "lightgallery/react";

import lgVideo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import { motion } from "framer-motion";

function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
}

const Gallery = ({ images, videos }) => {
    const [final, setFinal] = useState(null);
    const imagesArr = images.map((curr) => (
        <a
            data-lg-size="1406-1390"
            className="inline-block m-[1vw] rounded-[1vw]"
            data-src={curr}
            key={curr}
        >
            <motion.img
                className="img-responsive max-h-[50vh] mx-auto rounded-[1vw] hover:cursor-pointer shadow-[0px_2vh_3vh_0.5vh_#fff]"
                src={curr}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                }}
                whileHover={{ scale: 1.03 }}
            />
        </a>
    ));
    const videosArr = videos.map((curr) => (
        <a
            className="inline-block m-[1vw] rounded-[1vw]"
            data-src={curr}
            key={curr}
        >
            <motion.img
                className="img-responsive max-w-[30vw] rounded-[1vw] hover:cursor-pointer shadow-[0px_2vh_3vh_0.5vh_#fff]"
                alt=""
                src={`https://img.youtube.com/vi/${curr.slice(
                    -11
                )}/hqdefault.jpg`}
                initial={{ y: "100%", opacity: 0, scale: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                }}
                whileHover={{ scale: 1.03 }}
            />
        </a>
    ));
    useEffect(() => {
        let tempFinal = [...imagesArr, ...videosArr];
        shuffle(tempFinal);
        setFinal(tempFinal);
    }, []);
    return (
        <div className="w-[80vw] flex items-center justify-center mx-auto my-[5vh]">
            <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
                {final}
            </LightGallery>
        </div>
    );
};

export default Gallery;
