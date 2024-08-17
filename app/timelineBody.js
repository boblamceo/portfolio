import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineComp from "./timelineItem";
const timeline11 = "/timeline/IMG_0877.jpg";
const timeline12 = "/timeline/IMG_1019.jpg";
const timeline13 = "/timeline/IMG_1020.jpg";
const timeline21 = "/timeline/WechatIMG1135.jpg";
const timeline31 = "/timeline/WechatIMG1142.jpg";
const timeline32 = "/timeline/IMG_2447.jpg";
const timeline33 = "/timeline/IMG_2464.jpg";
const timeline34 = "/timeline/IMG_2466.jpg";
const timeline35 = "/timeline/IMG_2476.jpg";
const timeline36 = "/timeline/IMG_2477.jpg";
const timeline37 = "/timeline/IMG_2478.jpg";
const timeline41 = "/timeline/IMG_2653.jpg";

const timelineItems = [
    {
        date: "2017",
        description:
            "I started to learn how to code at 7 years old, with my first programming language being Javascript. I also learned many different algorithms, like quicksort, binary search etc. Moreover, I learned how to make websites with React JS. ",
        images: [timeline11, timeline12, timeline13],
    },
    {
        date: "2018",
        description:
            "I joined a Credit Suisse conference and met many highly-skilled developers there. There were talks with a wide range of interesting topics, like cloud computing etc.",
        images: [timeline21],
    },
    {
        date: "2019",
        description:
            "I learned about robotics, and made my first Arduino circuit at 9 years old. In addition, I wrote code for Raspberry PI.",
        images: [
            timeline31,
            timeline32,
            timeline33,
            timeline34,
            timeline35,
            timeline36,
            timeline37,
        ],
    },
    {
        date: "2020",
        description:
            "I made my first app using React Native (which isn't on the app store). The first app I published on the app store is Binoculars, which you can see in the projects section!",
        images: [timeline41],
    },
];

const TimelineBody = ({ setClickIn }) => {
    return (
        <div className="min-h-screen w-screen bg-black pb-[5vh]">
            <Timeline position="alternate">
                {timelineItems.map((curr, index) => (
                    <TimelineComp
                        curr={curr}
                        index={index}
                        setClickIn={setClickIn}
                    />
                ))}
            </Timeline>
        </div>
    );
};

export default TimelineBody;
