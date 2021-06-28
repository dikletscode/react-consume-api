import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import jwtValidity from "../component/login/jwtValidity";

let url = "http://localhost:3000/";
let data = JSON.parse(localStorage.getItem("user")) || {};

const editProfile = (fullname, noTelp, address, image) => {
  return axios.put(
    url + "profile/" + data.result[0].username,
    {
      user_id: data.result[0].user_id,
      fullname: fullname,
      no_telepon: noTelp,
      address: address,
      image: image,
    },
    {
      headers: jwtValidity(),
    }
  );
};

const getProfile = async () => {
  return await axios.get(url + "profile/" + data.result[0].username, {
    headers: jwtValidity(),
  });
};

const register = (username, email, password) => {
  return axios.post(url + "signup", {
    user_id: uuidv4(),
    role_id: 1,
    username: username,
    email: email,
    pass: password,
  });
};
const login = (email, password) => {
  return axios
    .post(url + "login", {
      email: email,
      pass: password,
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
  getProfile,
  editProfile,
};
