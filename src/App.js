import {
  BrowserRouter as Router,
  Redirect,
  Link,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { Header } from "./component/Header";
import "./App.css";
import React, { createContext, useState } from "react";
import Detail from "./component/product/Detail";
import Form from "./component/login/Form";
import { AuthContext, useAuth } from "./context/auth";
import UserProfile from "./component/UserProfile";

// import {BrowserRouter as Router} from 'react-router-dom';
import Product from "./component/product/Product";
export const Context = createContext();

const App = () => {
  const auth = useAuth();
  const [idProduk, setIdProduk] = useState("");

  return (
    <Context.Provider value={[idProduk, setIdProduk]}>
      <Router>
        <Header />

        <Switch>
          {/* <Route exact path='/user'>
            {JSON.parse(localStorage.getItem("user")).logIn == true ? (
              <UserProfile />
            ) : (
              <Redirect to='/' />
            )}
          </Route> */}
          <Route path='/login' component={Form} />
          <Route path={`/:id_produk`} component={Detail} />
          <Route path='/' exact component={Product} />
        </Switch>
        <footer className='text-center'>
          {idProduk}
          <p>&copy; 2021 ig : @dikii_belekok</p>
        </footer>
      </Router>
    </Context.Provider>
  );
};

export default App;
