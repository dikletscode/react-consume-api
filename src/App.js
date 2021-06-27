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
import React, { createContext, useState, useContext, useEffect } from "react";
import Detail from "./component/product/Detail";
import Form from "./component/login/Form";
import ProfilePage from "./component/login/ProfilePage";
import UserProfile from "./component/UserProfile";
import PrivateRoute from "./route/PrivateRoute";
import Product from "./component/product/Product";
export const Context = createContext();
export const AuthContext = createContext();
import axios from "axios";

const App = () => {
  const [idProduk, setIdProduk] = useState("");
  const [isLogins, setLogins] = useState(false);

  return (
    <AuthContext.Provider value={[isLogins, setLogins]}>
      <Context.Provider value={[idProduk, setIdProduk]}>
        <Router>
          <Header />

          <Switch>
            <Route path='/login' component={Form} />
            <PrivateRoute component={ProfilePage} path='/profile' />
            />
            <Route path={`/:id_produk`} component={Detail} />
            <Route path='/' exact component={Product} />
          </Switch>
          <footer>
            <button onClick={() => getLogin()}>get</button>;
            <p> 2021 ig : @dikii_belekok{isLogins} </p>
          </footer>
        </Router>
      </Context.Provider>
    </AuthContext.Provider>
  );
};

export default App;
