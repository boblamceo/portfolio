import React from "react";
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
    const imagesArr = images.map((curr) => (
        <a
            data-lg-size="1406-1390"
            className="inline-block m-[1vw] rounded-[1vw]"
            data-src={curr}
            key={curr}
        >
            <motion.img
                className="img-responsive max-h-[50vh] mx-auto rounded-[1vw]"
                src={curr}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                }}
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
                className="img-responsive max-w-[30vw] rounded-[1vw]"
                alt=""
                src={`https://img.youtube.com/vi/${curr.slice(
                    -11
                )}/hqdefault.jpg`}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                }}
            />
        </a>
    ));

    let final = [...imagesArr, ...videosArr];
    shuffle(final);
    return (
        <div className="w-[80vw] flex items-center justify-center mx-auto my-[5vh]">
            <LightGallery
                plugins={[lgZoom, lgVideo]}
                width={`1000px`}
                mode="lg-fade"
                onInit={() => {
                    console.log("hi");
                }}
            >
                {final}
            </LightGallery>
        </div>
    );
};

export default Gallery;
