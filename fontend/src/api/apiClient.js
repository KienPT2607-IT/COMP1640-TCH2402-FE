import axios from 'axios';
import queryString from 'query-string';

const getToken = () => {
    const token = sessionStorage.getItem('x-auth-token');
    console.log('Token: ', token);
    return token; 
};

const axiosClient = axios.create({
    baseURL: 'https://comp1640-tch2402-be.onrender.com',
    headers: {
        'content-type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    const token = getToken();
     // Sử dụng hàm getToken để lấy token từ sessionStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers['x-auth-token'] = token; 
    } else {
        // Nếu không tồn tại token, thực hiện xử lý phù hợp, ví dụ: chuyển hướng đến trang đăng nhập
        // window.location.href = '/login';
        throw new Error('Unauthorized: Token not found');
    }
    return config;
});


axiosClient.interceptors.response.use(
    response => {
        // Kiểm tra trạng thái của response trước khi xử lý dữ liệu
        if (response.status >= 200 && response.status < 300) {
            // Nếu response có dữ liệu, trả về dữ liệu
            if (response.data) {
                return response.data;
            }
        } else {
            // Nếu có lỗi, ném ra lỗi để xử lý ở phần gọi API
            throw new Error(response.statusText || 'Something went wrong');
        }
    },
    error => {
        // Ném ra lỗi để xử lý ở phần gọi API
        throw error;
    }
);

export default axiosClient;
