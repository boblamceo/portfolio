import React from "react";

const Slide = ({ elements, scrollY }) => {
    // scrollY: 0-100
    const top = `${
        80 * elements - scrollY < 5
            ? 5 - elements * 0.5
            : 80 * elements - scrollY
    }vh`;
    console.log(top);
    return (
        <div
            className={`bg-blue-400 w-[70vw] h-[200vh] rounded-lg fixed border-2`}
            style={{
                top,
            }}
        >
            hi
        </div>
    );
};

export default Slide;
