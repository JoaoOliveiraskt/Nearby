import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.0.10.240:3333",
  timeout: 700,
});
