import React from "react";
import axios from "axios";

let url = "http://localhost:3000/";

const register = (username, email, password) => {
  return axios.post(url + "signup", {
    username: username,
    email: email,
    password: password,
  });
};
const login = (email, password) => {
  return axios
    .post(url + "login", {
      email: email,
      password: password,
    })
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};
export default {
  register,
  login,
  logout,
};
