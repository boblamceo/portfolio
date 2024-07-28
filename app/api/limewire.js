require("dotenv").config();

import axios from "axios";

const apiKey = process.env.API_KEY;

export const getPhotosByQuery = async ({ query }) => {
    const options = {
        method: "POST",
        url: "https://api.segmind.com/v1/sdxl1.0-txt2img",
        headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
        data: {
            prompt: query,
            seed: 17123564234,
            num_inference_steps: 20,
            negative_prompt: "NONE",
            samples: "1",
            guidance_scale: "7.5",
            strength: "1",
            shape: 512,
        },
    };

    try {
        const response = await axios.request(options);
        // convert raw blob as ArrayBuffer to an image blob with MIME type
        const imageBlob = new Blob([response.data], { type: "image/jpeg" });
        return URL.createObjectURL(imageBlob);
    } catch (error) {
        console.error("Error while fecthing Gen AI model API", error);
    }
};
