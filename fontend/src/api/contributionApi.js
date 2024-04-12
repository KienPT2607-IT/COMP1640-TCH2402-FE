import axiosClient from "./apiClient";
import apiClient from "./apiClient";

const contributionApi = {
    getAll: (eventId) => {
        const url = `contributions/event/${eventId}`;
        return apiClient.get(url);
    },
    // create: (data) => {
    //     const url = '/users/create-user';
    //     return apiClient.post(url, data);
    // },
    // update: (data) => {
    //     const url = `/users/update/${data.userId}`;
    //     return apiClient.put(url, data);
    // },
    // delete: (userId) => {
    //     const url = `/users/delete/${userId}`;
    //     return apiClient.delete(url);
    // },
    // getDetail: (userId) => {
    //     const url = `/users/${userId}`;
    //     return axiosClient.get(url);
    // },
    // getUserUpdate: () => {
    //     const url = 'users/update';
    //     return axiosClient.get(url);
    // }
}

export default contributionApi;


