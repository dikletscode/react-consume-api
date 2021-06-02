import React from "react";
import "./Nav.css";
import { Menu } from "../resource/Menu";

const li = Menu.map((item) => <li>{item.title}</li>);
const Nav = () => {
  return (
    <>
      <nav className='nav-container'>
        <ul className='item'>
          <i class='fa fa-shopping-cart fa-2x'></i>
          {li}
        </ul>
      </nav>
    </>
  );
};
export default Nav;
