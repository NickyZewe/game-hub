import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '152215d46aba47d28c3cf6c190500e44'
    }
})

