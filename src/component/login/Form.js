import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";

axios.defaults.withCredentials = true;
const Form = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [login, setLogin] = useState({
    emailLogin: "",
    passwordLogin: "",
  });
  const [store, setStore] = useState([]);
  const [loginStatus, setLoginStatus] = useState("");

  const submit = () => {
    axios
      .post("http://localhost:3000/signup", {
        username: data.username,
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res).catch((err) => console.log(err));
      });
  };
  const loginSubmit = () => {
    axios
      .post("http://localhost:3000/login", {
        email: login.emailLogin,
        password: login.passwordLogin,
      })
      .then((res) => {
        if (res.data.msg) {
          setLoginStatus(res.data.msg);
          console.log(loginStatus);
        } else {
          setLoginStatus(res.data[0].username);
        }
      });
  };

  const getLogin = async () => {
    await axios.get("http://localhost:3000/login").then((res) => {
      if (res.data.isLogin == true) {
        setLoginStatus(res.data.user[0].username);
        console.log(loginStatus);
      }
    });
  };
  useEffect(() => {
    getLogin();
  }, []);

  const handleChange = (e) => {
    e;
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  const handleLogin = (e) => {
    const newLogin = { ...login };
    newLogin[e.target.id] = e.target.value;
    setLogin(newLogin);
  };
  // console.log(store);

  return (
    <>
      <div className='contain d-flex align-items-center justify-content-evenly '>
        <div className='signup p-2 '>
          <form className='form col-12' onSubmit={() => submit()}>
            <legend>sign up</legend>
            <div className='form-group'>
              <label for='username'>Username</label>
              <input
                type='text'
                class='form-control'
                id='username'
                name='username'
                value={data.username}
                onChange={(e) => handleChange(e)}
                placeholder='username'
              />
            </div>
            <div className='form-group'>
              <label for='email'>Email address</label>
              <input
                type='email'
                name='email'
                class='form-control'
                id='email'
                value={data.email}
                onChange={(e) => handleChange(e)}
                aria-describedby='emailHelp'
                placeholder='Enter email'
              />
            </div>
            <div className='form-group'>
              <label for='password'>Password</label>
              <input
                type='password'
                class='form-control'
                id='password'
                value={data.password}
                onChange={(e) => handleChange(e)}
                placeholder='Password'
              />
            </div>
            <input type='submit' class='btn btn-primary' />
            Submit
          </form>
        </div>
        <div className='signup p-2'>
          <div className='form'>
            <form className='col-12' onSubmit={(e) => loginSubmit(e)}>
              <legend>Login</legend>
              <div className='form-group'>
                <label for='email'>Email address</label>
                <input
                  type='email'
                  name='emailLogin'
                  class='form-control'
                  id='emailLogin'
                  value={login.emailLogin}
                  onChange={(e) => handleLogin(e)}
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group'>
                <label for='password'>Password</label>
                <input
                  type='password'
                  class='form-control'
                  id='passwordLogin'
                  value={login.passwordLogin}
                  onChange={(e) => handleLogin(e)}
                  placeholder='Password'
                />
              </div>
              <input type='submit' class='btn btn-primary' />
              Submit
            </form>
          </div>
        </div>
      </div>
      <p> {loginStatus}</p>
    </>
  );
};
export default Form;
