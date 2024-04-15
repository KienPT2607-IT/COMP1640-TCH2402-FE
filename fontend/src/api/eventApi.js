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
    // update: (data) => {    //     const url = `/events/updateEvent/${data.}`;
    //     return axiosClient.put(url, data)
    // },
    // delete(userId) {
    //     const url = `/events/delete/${userId}`;
    //     return apiClient.delete(url);
    // },
    // getDetail: (userId) => {
    //     const url = `/users/view/${userId}`;
    //     return apiClient.get(url);
    // }

    // Thêm các phương thức API khác ở đây nếu cần
}

export default eventApi;


