import axios from "axios";
// import authHeader from "./auth-header";
import { axiosInstance } from "./service";

// const API_URL = "http://localhost:8080";
// const 

// // const getPublicContent = () => {
// //   return axiosInstance.get(API_URL + "all");
// // };

// const getEmployeeBoard = () => {
//   return axiosInstance.get(API_URL + "user", { headers: authHeader() });
// };

// const getSystemClarkBoard = () => {
//   return axiosInstance.get(API_URL + "system_clark", { headers: authHeader() });
// };

// const getHODBoard = () => {
//   return axiosInstance.get(API_URL + "hod", { headers: authHeader() });
// };

// const getCurrentUser = async() => {
//   return await axiosInstance.get(API_URL + "/user/me");
// }

// export {
//   // getPublicContent,
//   getUserBoard,
//   getModeratorBoard,
//   getAdminBoard,
//   getCurrentUser,
// };

const USER_API_BASE_URL= ""

class UserService{
    updateUser(user,id){

        return axiosInstance.put(USER_API_BASE_URL + '/update-user/'+`${id}`,user);

    }

    forgotPassword(user){
        return axiosInstance.post(USER_API_BASE_URL+'/forget-password',user)
    }

    forgotPasswordHOD(user){
        return axiosInstance.post(USER_API_BASE_URL+'/forgotPasswordHOD',user);
    }

    forgotPasswordLeaveClark(user){
        return axiosInstance.post(USER_API_BASE_URL+'/forgotPasswordLeaveClarke',user);
    }
}

export default new UserService()