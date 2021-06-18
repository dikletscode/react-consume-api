import React from "react";
import "./Nav.css";
import { Menu } from "../resource/Menu";
import enter from "../resource/enter.png";
import { Link } from "react-router-dom";

const li = Menu.map((item) => <li>{item.title}</li>);
const Nav = () => {
  return (
    <>
      <nav className='nav-container'>
        <ul className='item'>
          <i class='fa fa-shopping-cart fa-2x'></i>
          {li}
          <li>
            <Link to='/regis'>
              <img src={enter} className='icon' />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
