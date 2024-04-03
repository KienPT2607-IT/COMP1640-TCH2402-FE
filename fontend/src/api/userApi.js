import apiClient from "./apiClient";

const userApi = {
    getAll: () => {
        const token = sessionStorage.getItem('x-auth-Token');
        if (!token) {
            throw new Error('Unauthorized: Token not found');
        }

        const url = '/users';
        return apiClient.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },
    // Thêm các phương thức API khác ở đây nếu cần
}

export default userApi;
