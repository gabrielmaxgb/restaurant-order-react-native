import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer hIuNETKKL6S6HYWUoyhbSmfhZYC0rWqpu4y6wTFyPXIfW-_mMAyvLR6MeX2xLtMKXukTmKWHed9I3GejCz8uRhmQO6UNhKVJx_LapiMfk10AZo70lZIRDskyvGDyYnYx"
    }
});

export default instance;
