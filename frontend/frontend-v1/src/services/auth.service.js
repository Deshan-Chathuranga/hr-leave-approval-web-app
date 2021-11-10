
import axios from "axios";

import { saveAccessToken, saveRole, saveTokenType } from "../util/web_storage";

import { axiosInstance } from "./service";

const API_URL = "/auth";


const register = (username, email, password) => {

    return axiosInstance.post(API_URL + "/signup", {
        username,
        email,
        password,
    });
};


const login = async (username, password) => {
    try {


        const response = await axiosInstance
            .post(API_URL + "/login", {
                username,
                password,
            });

        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));

            saveRole(response.data.role);
            saveAccessToken(response.data.accessToken);
            saveTokenType(response.data.tokenType);
        }
        return response.data;
    }
    catch (e) {
        throw e;
    }
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};


