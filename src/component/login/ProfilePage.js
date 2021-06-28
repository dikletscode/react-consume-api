import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import authService from "../../services/auth.service.js";

const ProfilePage = () => {
  let personal = JSON.parse(localStorage.getItem("user")).result[0] || {};
  const [data, setData] = useState({
    fullname: "",
    no_telepon: "",
    address: "",
    image: "",
  });
  let [bio, setBio] = useState([]);
  const logOut = () => {
    authService.logout();
    window.location.reload();
  };
  const handleEdit = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  const getProfileData = async () => {
    try {
      let result = await authService.getProfile();
      console.log(result.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  const editProfiles = (e) => {
    authService
      .editProfile(data.fullname, data.no_telepon, data.address, data.image)
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
  };

  useEffect(() => {
    getProfileData();
  }, []);

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
                <td>{bio.fullname}</td>
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
          <form className='form-edit' onSubmit={(e) => editProfiles(e)}>
            <>
              <legend>Login</legend>
              <div className='data-edit'>
                <label htmlFor='fullname'>FULLNAME</label>
                <input
                  type='text'
                  name='fullname'
                  className='classFull'
                  id='fullname'
                  value={data.fullname}
                  onChange={(e) => handleEdit(e)}
                  placeholder='Full Name'
                />
              </div>
              <div className='data-edit'>
                <label htmlFor='no_telepon'>NO TELP</label>
                <input
                  type='text'
                  name='no_telepon'
                  className='classFull'
                  id='no_telepon'
                  value={data.no_telepon}
                  onChange={(e) => handleEdit(e)}
                  placeholder='Full Name'
                />
              </div>
              <div className='data-edit'>
                <label htmlFor='address'>ADDRESS</label>
                <input
                  type='text'
                  name='address'
                  className='classFull'
                  id='address'
                  value={data.address}
                  onChange={(e) => handleEdit(e)}
                  placeholder='address'
                />
              </div>
              <div className='data-edit'>
                <label htmlFor='imageData'>IMAGE</label>
                <input
                  type='text'
                  name='imageData'
                  className='classFull'
                  id='image'
                  value={data.image}
                  onChange={(e) => handleEdit(e)}
                  placeholder='address'
                />
              </div>
              <br />
              <input type='submit' className='submit' />
              <p className='submit-err'> </p>
            </>
          </form>
          <button onClick={logOut}>Log Out</button>
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
