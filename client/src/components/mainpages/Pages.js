import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Products from './products/Products';
import Login from './auth/Login';
import Register from './auth/Register';
import Cart from './cart/Cart';
import NotFound from './utils/not_found/NotFound';

export default function Header() {
    return (
        <Switch>
            <Route path="/" exact component={Products}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/cart" exact component={Cart}/>

            <Route path="*" exact component={NotFound}/>
        </Switch>
        
    )
}