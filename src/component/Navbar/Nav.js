import React, { useContext } from "react";
import "./Nav.css";
import { Menu } from "../resource/Menu";
import enter from "../resource/enter.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";

const li = Menu.map((item) => <li>{item.title}</li>);
const Nav = () => {
  const [isLogins, setLogins] = useContext(AuthContext);
  return (
    <>
      <nav className='nav-container'>
        <ul className='item'>
          <i className='fa fa-shopping-cart fa-2x'></i>
          {li}
          <li>
            <Link to={isLogins ? "/profile" : "/login"}>
              <img src={enter} className='icon' />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
