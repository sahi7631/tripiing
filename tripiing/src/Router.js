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
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;