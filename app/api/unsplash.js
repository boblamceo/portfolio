require("dotenv").config();

import { createApi } from "unsplash-js";
import axios from "axios";

const clientId = process.env.UNSPLASH_ACCESS_KEY;

const UNSPLASH_ROOT = "https://api.unsplash.com";

export const getPhotosByQuery = async ({ query }) => {
    const { data } = await axios.get(
        `${UNSPLASH_ROOT}/search/photos?query=${query}&client_id=${clientId}&per_page=20`
    );
    return data;
};
