import React from 'react';
import {Header }from './component/Header'
import Home from './component/Home';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

 
const App = () =>
<Router>
  <div>

  <Header/>
  <Home/>
  
  </div>
  </Router>
 
export default App;