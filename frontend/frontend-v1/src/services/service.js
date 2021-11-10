import axios from "axios";
import { getAccessToken, getTokenType } from "../util/web_storage";

const BASE_URL = "http://localhost:8080";

export const axiosInstance = axios.create(
    {
        baseURL: BASE_URL,
        timeout: 60000
    }
);

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = getAccessToken();
        const tokenType = getTokenType();

        if (accessToken) {
            config.headers.Authorization = `${tokenType} ${accessToken}`;
        }
        config.headers = {
            ...config.headers,
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json; charset=UTF-8"
        };
        return config;
    }
)
