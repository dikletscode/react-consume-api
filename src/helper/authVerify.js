import React from "react";

const authVerify = () => {
  const client = JSON.parse(localStorage.getItem("user"));
  if (client && client.token) {
    return { "x-access-token": client.token };
  } else {
    return {};
  }
};
export default authVerify;
