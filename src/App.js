import React from "react";
import { Header } from "./component/Header";
import "./App.css";
// import {BrowserRouter as Router} from 'react-router-dom';
import Product from "./component/product/Product";

const App = () => (
  <div>
    <Header />
    <Product />
  </div>
);

export default App;
