"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Description = () => {
    const searchParams = useSearchParams();

    const name = searchParams.get("name");
    return <h1>{name}</h1>;
};

export default Description;
