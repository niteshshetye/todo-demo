import axios from "axios";

export const todoClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
