import axiosClient from "./axiosClient";


const userApi = {
    getAll: (params) => {
        const url = '/users';
        return axiosClient.get(url, {params});
    },

    get: (id) => {
        const url = '/user/${id}';
        return axiosClient.get(url);
    },
}

export default userApi;