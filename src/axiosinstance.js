import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001",
    // baseURL: "https://jsonplaceholder.typicode.com/comments"
});

export default instance;