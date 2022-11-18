import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=4be79212067a0d972a7090b3973581fb&format=json"
});