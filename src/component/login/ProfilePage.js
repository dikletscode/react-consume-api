import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import authService from "../../services/auth.service.js";

const ProfilePage = () => {
  let personal = JSON.parse(localStorage.getItem("user")).result[0] || {};
  const logOut = () => {
    authService.logout();
    window.location.reload();
  };
  // const getProfileData = () => {
  //   authService.getProfile().then((res) => {
  //     console.log(res.data);
  //   });
  // };

  // useEffect(() => {
  //   getProfileData();
  // }, []);

  return (
    <>
      <div className='profilee'>
        <div className='biodataa'>
          <table>
            <tbody>
              <tr>
                <td>USERNAME :</td>
                <td>{personal.username}</td>
              </tr>
              <tr>
                <td>FULLNAME :</td>
                <td>{personal.username}</td>
              </tr>
              <tr>
                <td>no_telepon :</td>
                <td>{personal.username}</td>
              </tr>
              <tr>
                <td>address :</td>
                <td>{personal.username}</td>
              </tr>
              <tr>
                <td>photo :</td>
                <td>{personal.username}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={logOut}>Log Out</button>
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
