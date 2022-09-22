import axios from "axios";

export const myClientsAPI = axios.create({
  baseURL: "http://localhost:3000",
});
