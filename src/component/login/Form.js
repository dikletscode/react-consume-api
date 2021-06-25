import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Form.css";
import authService from "../../services/auth.service.js";
import validasi from "./validasi/FormValidasi";

axios.defaults.withCredentials = true;

const Form = () => {
  let history = useHistory();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [login, setLogin] = useState({
    emailLogin: "",
    passwordLogin: "",
  });
  const [message, setMessage] = useState("");

  const handleSignupSubmit = (e) => {
    authService
      .register(data.username, data.email, data.password)
      .then(() => {
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
  };
  const handleLoginSubmit = (e) => {
    authService
      .login(login.emailLogin, login.passwordLogin)
      .then(() => {
        history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        if ((err.response.code = 400)) {
          setMessage("u can't login");
        }
      });
    e.preventDefault();
  };

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  const handleLogin = (e) => {
    const newLogin = { ...login };
    newLogin[e.target.id] = e.target.value;
    setLogin(newLogin);
  };
  const getLogin = async () => {
    await axios.get("http://localhost:3000/user").then((res) => {});
  };
  useEffect(() => {
    getLogin();
  }, []);

  return (
    <>
      <div className='container-form'>
        <div className='inside'>
          <form className='form-regis' onSubmit={() => handleSignupSubmit()}>
            <legend>Sign up</legend>
            <div className='data-form'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                className='input'
                id='username'
                name='username'
                value={data.username}
                onChange={(e) => handleChange(e)}
                placeholder='username'
              />
            </div>
            <div className='data-form'>
              <label htmlFor='email'>Email address</label>
              <input
                type='email'
                name='email'
                className='input'
                id='email'
                value={data.email}
                onChange={(e) => handleChange(e)}
                aria-describedby='emailHelp'
                placeholder='Enter email'
              />
            </div>
            <div className='data-form'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='input'
                id='password'
                value={data.password}
                onChange={(e) => handleChange(e)}
                placeholder='Password'
              />
            </div>
            <br />
            <input type='submit' className='submit' />
          </form>
        </div>
        <div className='inside'>
          <form className='form-login' onSubmit={(e) => handleLoginSubmit(e)}>
            <legend>Login</legend>
            <div className='data-form'>
              <label htmlFor='email'>Email address</label>
              <input
                type='email'
                name='emailLogin'
                className='input'
                id='emailLogin'
                value={login.emailLogin}
                onChange={(e) => handleLogin(e)}
                aria-describedby='emailHelp'
                placeholder='Enter email'
              />
            </div>
            <div className='data-form'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='input'
                id='passwordLogin'
                value={login.passwordLogin}
                onChange={(e) => handleLogin(e)}
                placeholder='Password'
              />
            </div>
            <br />
            <input type='submit' className='submit' />
          </form>
        </div>
      </div>
      )}
      <p style={{ textAlign: "center" }}>{message}</p>
    </>
  );
};
export default Form;
