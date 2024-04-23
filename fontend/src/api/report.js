import apiClient from "./apiClient";

const reportApi = {
    get: () => {
        const url = 'reports';
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
    // putUserUpdate: () => {
    //     const url = 'users/update';
    //     return axiosClient.put();
    // }
}

export default reportApi;


