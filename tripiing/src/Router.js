import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import App from './App';
import About from './container/About';
import Login from './container/Login';
import Contact from './container/Contact';
import CarList from './container/CarListContainer'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                  <Contact/>
                </Route>
                <Route  path="/login">
                    <Login />
                </Route>
                <Route  path="/carlist">
                    <CarList />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;