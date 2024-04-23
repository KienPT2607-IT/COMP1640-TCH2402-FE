import axiosClient from "./apiClient";
import apiClient from "./apiClient";
import axios from 'axios';
const userApi = {
    getAll: () => {
        const url = '/users';
        return apiClient.get(url);
    },
    create: (data) => {
        const url = '/users/create-user';
        return apiClient.post(url, data);
    },
    update: (data) => {
        const url = `/users/update/${data.userId}`;
        return apiClient.put(url, data);
    },
    delete: (userId) => {
        const url = `/users/delete/${userId}`;
        return apiClient.delete(url);
    },
    getDetail: (userId) => {
        const url = `/users/${userId}`;
        return axiosClient.get(url);
    },
    putUserUpdate: () => {
        const url = 'users/update';
        return axiosClient.put();
    },
    forgotPassword: (email) => {
        return axios({
            method: 'post',
            url: 'https://comp1640-tch2402-be.onrender.com/users/forgot-password',
            data: {
              email
            }
          });
    }
}

export default userApi;


