import apiClient from "./apiClient";



const userApi = {
    getAll: () => {
        const url = '/users';
        return apiClient.get(url);
    },
    create: (data) => {
        const url = '/users/create-user';
        return apiClient.post(url, data);
    },
    update: () => {
        const url = 'users/update'
    }
    // Thêm các phương thức API khác ở đây nếu cần
}

export default userApi;


