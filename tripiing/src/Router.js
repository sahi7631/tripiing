import React from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Home from './container/Home';
import About from './container/About';
import Login from './container/Login';
import Contact from './container/Contact';
import CarList from './container/CarListContainer';
import Checkout from './container/Checkout'
import AddCar from './container/AddCar';

const AppRouter = () => {
    return (
        <Router>
               
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/carlist" component={CarList} />
                <Route exact path="/earnwithus" component={AddCar} />
                <Route  path="/checkout" component={Checkout}>
                </Route>
        </Router>
    );
}

export default AppRouter;