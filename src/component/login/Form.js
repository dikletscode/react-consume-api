import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import "./Form.css";
import authService from "../../services/auth.service.js";
import EmailInput, { validasi } from "./validasi/FormValidasi";

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
  const [isLogin, setStatus] = useState(false);
  const [valid, setValid] = useState({
    setCss: "input",
    warning: "clear-warning",
  });

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
    e.preventDefault();
    if (validasi(login.emailLogin) == true) {
      authService
        .login(login.emailLogin, login.passwordLogin)
        .then((res) => {
          if (res.logIn == true) {
            setStatus(res.logIn);
          } else {
            setMessage("wrong account");
          }
        })
        .catch((err) => {
          if ((err.response.code = 400)) {
            setStatus(false);
            setMessage("u can't login");
          }
        });
    } else {
      setValid({ setCss: "input-invalid", warning: "warning" });
    }
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
    setValid({ setCss: "input", warning: "clear-warning" });
  };
  const getLogin = async () => {
    await axios.get("http://localhost:3000/user").then((res) => {});
  };
  useEffect(() => {
    getLogin();
  }, []);

  return (
    <>
      {isLogin == true ? (
        <Redirect to='/' />
      ) : (
        <div className='container-form'>
          <div className='inside'>
            <form className='form-regis' onSubmit={(e) => handleSignupSubmit(e)}>
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
                  required
                />
              </div>
              <div className='data-form'>
                <label htmlFor='email'>Email address</label>
                <EmailInput
                  id='emailSubmit'
                  name='input'
                  value={data.email}
                  change={(e) => handleChange(e)}
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
                  required
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
                <label htmlFor='email'>Email address </label>
                <EmailInput
                  id='emailLogin'
                  name={valid.setCss}
                  value={login.emailLogin}
                  change={(e) => handleLogin(e)}
                />
                <p className={valid.warning}>invalid email format </p>
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
                  required
                />
              </div>
              <br />
              <input type='submit' className='submit' />
              <p className='submit-err'> {message}</p>
            </form>
          </div>
        </div>
      )}

      <p style={{ textAlign: "center" }}></p>
    </>
  );
};
export default Form;
