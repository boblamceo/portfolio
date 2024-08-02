"use client";
import React, { useEffect } from "react";

const Description = (props) => {
    useEffect(() => {
        console.log(props.router.query.name);
    }, [props.router.query]);
    return <h1>HELLO</h1>;
};

export default Description;
