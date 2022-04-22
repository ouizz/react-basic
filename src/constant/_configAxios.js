import axios from "axios";
import { BASE_URL_PATH } from "./Constants"; 

export default axios.create({
    baseURL: BASE_URL_PATH,
    headers: {
        'Content-Type' : 'application/json'
    }
})