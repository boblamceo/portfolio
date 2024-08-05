import React from "react";
import LightGallery from "lightgallery/react";

import lgVideo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import { motion } from "framer-motion";

const Gallery = ({ images, videos }) => {
    return (
        <div className="w-[80vw] flex items-center justify-center mx-auto mt-[5vh]">
            <LightGallery
                plugins={[lgZoom, lgVideo]}
                width={`1000px`}
                mode="lg-fade"
                onInit={() => {
                    console.log("hi");
                }}
            >
                {images.map((curr) => (
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
                                delay: 2,
                                duration: 0.5,
                                type: "spring",
                            }}
                        />
                    </a>
                ))}
                {videos.map((curr) => (
                    <a
                        className="inline-block m-[1vw] rounded-[1vw]"
                        data-src={curr}
                        key={curr}
                    >
                        <img
                            className="img-responsive"
                            alt=""
                            src={`https://img.youtube.com/vi/${curr.slice(
                                -11
                            )}/hqdefault.jpg`}
                        />
                    </a>
                ))}
            </LightGallery>
        </div>
    );
};

export default Gallery;
