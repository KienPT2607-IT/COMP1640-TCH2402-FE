import axiosClient from "./apiClient";
import apiClient from "./apiClient";

const contributionApi = {
    getAll: (eventId) => {
        const url = `contributions/event/${eventId}`;
        return apiClient.get(url);
    },
    
    create: (formData) => {
        console.log(formData)
        const url = '/contributions/create';
        const response = apiClient({
            url,
            method: "POST",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response
    }, 

    like: (id) => {
        const url = `contributions/like/${id}`
        const response = apiClient({
            url,
            method: "PUT"
        })
        return response
    },
    dislike: (id) => {
        const url = `contributions/dislike/${id}`
        const response = apiClient({
            url,
            method: "PUT"
        })
        return response
    }
}

export default contributionApi;


