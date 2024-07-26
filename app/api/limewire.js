require("dotenv").config();

import { createApi } from "unsplash-js";
import axios from "axios";

const clientId = process.env.API_KEY;

const LIMEWIRE_ROOT = "https://api.limewire.com/api/image/generation";

export const getPhotosByQuery = async ({ query }) => {
    const { data } = await axios.post(
        LIMEWIRE_ROOT,
        {
            prompt: query,
            aspect_ratio: "3:2",
        },
        {
            headers: {
                "Content-Type": "application/json",
                "X-Api-Version": "v1",
                Accept: "application/json",
                Authorization: `Bearer ${clientId}`,
            },
        }
    );
    return data;
};
