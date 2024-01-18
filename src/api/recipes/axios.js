import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.solleepang.store",
});

export default instance;
