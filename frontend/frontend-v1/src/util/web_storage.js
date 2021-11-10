
const CONST_ROLE = "role";
const CONST_TOKEN = "accessToken";
const CONST_TYPE = "tokenType";

export const saveRole = (role) => {
    localStorage.setItem(CONST_ROLE, role);
}

export const saveAccessToken = (token) => {
    localStorage.setItem(CONST_TOKEN, token);
}

export const saveTokenType = (type) => {
    localStorage.setItem(CONST_TYPE, type);
}


export const getRole = () => {
    return localStorage.getItem(CONST_ROLE);
}

export const getAccessToken = () => {
    return localStorage.getItem(CONST_TOKEN);
}

export const getTokenType = () => {
    return localStorage.getItem(CONST_TYPE);
}



