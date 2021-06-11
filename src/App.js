import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { Header } from "./component/Header";
import "./App.css";
import React, { createContext, useState } from "react";
import Detail from "./component/product/Detail";

// import {BrowserRouter as Router} from 'react-router-dom';
import Product from "./component/product/Product";
export const Context = createContext();

const App = () => {
  const [idProduk, setIdProduk] = useState("");

  return (
    <Context.Provider value={[idProduk, setIdProduk]}>
      <Router>
        <Header />

        <>
          <Switch>
            <Route path='/' exact component={Product} />
            <Route path={`/:id_produk`} component={Detail} />
          </Switch>
          <footer className='text-center'>
            {idProduk}
            <p>&copy; 2021 ig : @dikii_belekok</p>
          </footer>
        </>
      </Router>
    </Context.Provider>
  );
};

export default App;
