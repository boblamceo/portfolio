import React from "react";

const Slide = ({ elements, scrollY }) => {
    // scrollY: 0-100
    const top = `${100 + 50 * elements - scrollY * 0.9}vh`;
    console.log(top);
    return (
        <div
            className={`bg-blue-400 w-[70vw] h-[200vh] rounded-lg fixed`}
            style={{
                top,
            }}
        >
            hi
        </div>
    );
};

export default Slide;
