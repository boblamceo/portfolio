require("dotenv").config();

import OpenAI from "openai";

export const hi = () => {
    console.log(process.env.HI);
    return process.env.HI;
};

// export const openai = new OpenAI({
//     apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
// });

// export const handleChange = (e, setUserPrompt) => {
//     setUserPrompt(e.target.value);
// };

// export const handleImageHandler = async (
//     e,
//     setIsLoading,
//     setGeneratedImage,
//     userPrompt
// ) => {
//     try {
//         setIsLoading(true);
//         e.preventDefault();
//         const result = await openai.createImage({
//             prompt: userPrompt,
//             n: 1,
//             size: "512x512",
//         });

//         console.log(result, "result");
//         setGeneratedImage(result.data.data[0].url);
//         setIsLoading(false);
//     } catch (e) {
//         setIsLoading(false);
//         console.log(e);
//     }
// };
