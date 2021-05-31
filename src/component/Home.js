import React from 'react';
import Product from './product/Product';
import {Route,Switch} from 'react-router-dom'


const Home = () =>{
    return(
        <div>
        <Switch>
        <Route path="/" component={Product} />
        </Switch>   


        </div>
    )
}
export default Home;