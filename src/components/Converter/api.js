import axios from "axios";

export const fetchData = async () => {
    const API_KEY = '2a59af432712c2f09cd75c8861ba9e26'
    const baseUrl = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`
    return await axios.get(baseUrl);
};
