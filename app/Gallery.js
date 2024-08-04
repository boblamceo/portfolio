import React from "react";
import LightGallery from "lightgallery/react";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const Gallery = ({ images, videos }) => {
    return (
        <div className="w-[80vw] flex items-center justify-center mx-auto mt-[5vh]">
            <LightGallery
                plugins={[lgZoom]}
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
                        <img
                            className="img-responsive h-[50vh] mx-auto rounded-[1vw]"
                            src={curr}
                        />
                    </a>
                ))}
            </LightGallery>
        </div>
    );
};

export default Gallery;
