import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.github.com", // replace with the API URL you need to use
    timeout: 5000, // request timeout here
    headers: {
        "content-Type": "application/json",
        // additional headers go here
    }
})

export default instance

// you can use this axios instance to make HTTP requests