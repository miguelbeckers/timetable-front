import axios from "axios";

const http =  axios.create({
    baseURL: "http://localhost:8080",
    timeout: 50000
});

export default http;