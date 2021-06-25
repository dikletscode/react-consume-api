import axios from "axios";
import authVerify from "../helper/authVerify";

const url = "http://localhost:3000/";

const getAllProduct = (page) => {
  return axios.get(url + `produk?page=${page}`, { headers: authVerify() });
};
const getUser = () => {
  return axios.get(url + "user", { headers: authVerify() });
};
export default {
  getAllProduct,
  getUser,
};
