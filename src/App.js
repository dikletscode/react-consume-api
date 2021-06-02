import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./component/Header";
import "./App.css";
import React from "react";

// import {BrowserRouter as Router} from 'react-router-dom';
import Product from "./component/product/Product";

const App = () => (
  <>
    <Router>
      <Header />
      <>
        <Product />
        <footer className='text-center'>
          <p>&copy; 2021 ig : @dikii_belekok</p>
        </footer>
      </>
    </Router>
  </>
);

export default App;
