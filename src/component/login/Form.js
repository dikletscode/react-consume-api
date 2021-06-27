import React, { useState, useEffect, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import "./Form.css";
import authService from "../../services/auth.service.js";
import EmailInput, { validasi } from "./validasi/FormValidasi";
import { AuthContext } from "../../App";

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
  const [validLogin, setValidLogin] = useState({
    setCss: "input",
    warning: "clear-warning",
  });
  const [validRegis, setValidRegis] = useState({
    setCss: "input",
    warning: "clear-warning",
  });
  const [isLogins, setLogins] = React.useContext(AuthContext);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (validasi(data.email) == true) {
      authService
        .register(data.username, data.email, data.password)
        .then(() => {
          window.location.reload();
          setLogins(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setValidRegis({ setCss: "input-invalid", warning: "warning" });
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validasi(login.emailLogin) == true) {
      authService
        .login(login.emailLogin, login.passwordLogin)
        .then((res) => {
          if (res.logIn == true) {
            setStatus(res.logIn);
            setLogins(true);
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
      setValidLogin({ setCss: "input-invalid", warning: "warning" });
    }
  };

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    setValidRegis({ setCss: "input", warning: "clear-warning" });
  };
  const handleLogin = (e) => {
    const newLogin = { ...login };
    newLogin[e.target.id] = e.target.value;
    setLogin(newLogin);
    setValidLogin({ setCss: "input", warning: "clear-warning" });
  };

  return (
    <>
      {isLogin == true ? (
        <Redirect to='/' />
      ) : (
        <div className='container-form'>
          <div className='inside'>
            <form autocomplete='off' className='form-regis' onSubmit={(e) => handleSignupSubmit(e)}>
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
                  defaultValue='Reset'
                  required
                />
              </div>
              <div className='data-form'>
                <label htmlFor='email'>Email address</label>
                <EmailInput
                  id='email'
                  name={validRegis.setCss}
                  value={data.email}
                  change={(e) => handleChange(e)}
                />{" "}
                <p className={validRegis.warning}>invalid email format </p>
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
                  defaultValue='Reset'
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
                  name={validLogin.setCss}
                  value={login.emailLogin}
                  change={(e) => handleLogin(e)}
                  defaultValue='Reset'
                />
                <p className={validLogin.warning}>invalid email format </p>
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
