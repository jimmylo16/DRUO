import axios from "axios";

export const axiosLambdaInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});
