import React from "react";
import LightGallery from "lightgallery/react";
import lgVideo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import timeline11 from "../public/timeline/IMG_0877.jpg";
import timeline12 from "../public/timeline/IMG_1019.jpg";
import timeline13 from "../public/timeline/IMG_1020.jpg";
import timeline15 from "../public/timeline/WechatIMG1141.jpg";
import timeline14 from "../public/timeline/WechatIMG1140.jpg";
import timeline21 from "../public/timeline/WechatIMG1135.jpg";
import timeline31 from "../public/timeline/WechatIMG1142.jpg";
import timeline32 from "../public/timeline/IMG_2447.jpg";
import timeline33 from "../public/timeline/IMG_2464.jpg";
import timeline34 from "../public/timeline/IMG_2466.jpg";
import timeline35 from "../public/timeline/IMG_2476.jpg";
import timeline36 from "../public/timeline/IMG_2477.jpg";
import timeline37 from "../public/timeline/IMG_2478.jpg";
import timeline41 from "../public/timeline/IMG_2653.jpg";

const timelineItems = [
    {
        date: "2017",
        description:
            "I started to learn how to code at 7 years old, with my first programming language being Javascript. I also learned many different algorithms, like quicksort, binary search etc. Moreover, I learned how to make websites with React JS. ",
        images: [timeline11, timeline12, timeline13, timeline14, timeline15],
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

const TimelineBody = () => {
    return (
        <div className="min-h-screen w-screen bg-black pb-[5vh]">
            <Timeline position="alternate">
                {timelineItems.map((curr, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent
                            className={`flex flex-row ${
                                index % 2 === 0
                                    ? "justify-start"
                                    : "justify-end"
                            }`}
                        >
                            <div className="border-2 border-white h-[40vw] w-[30vw]">
                                hi
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    );
};

export default TimelineBody;
