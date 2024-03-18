import axios from 'axios';
import queryString from 'query-string'

//Set up default config for http request here

const axiosClient = axios.create({
    baseURL: "https://comp1640-tch2402-be.onrender.com",
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    //Handle token here
    return config;
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data){
        return response.data;
    }
    return response;
}, (error) => {
    //hanlde error
    throw error;
});

try { await axios.post("user/login", formData).then((res) => { console.log(res.data); }); } catch (error) { console.log(error.response.data.message); }

export default axiosClient;