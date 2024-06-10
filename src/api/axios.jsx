import axios from "axios";
require('dotEnv').config();

export default axios.create({
   baseURL: process.env.BACKEND_URL
})