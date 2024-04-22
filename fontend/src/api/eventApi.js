import axiosClient from "./apiClient";
import apiClient from "./apiClient";



const eventApi = {
    getAll: () => {
        const url = '/events';
        return apiClient.get(url);
    },
    create: (data) => {
        const url = '/events/createEvent';
        return apiClient.post(url, data);
    },
    // update: (data) => {
    //     const url = `/users/update/${data.userId}`;
    //     return axiosClient.put(url, data)
    // },
    // delete(userId) {

    // },
    // getDetail: (userId) => {
    //     const url = `/users/view/${userId}`;
    //     return apiClient.get(url);
    // }

    // Thêm các phương thức API khác ở đây nếu cần
}

export default eventApi;


