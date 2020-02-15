import React from 'react';
import HeaderContainerAbstract from './HeaderContainerAbstract';
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png';
import './style.css';

class HeaderContainer extends HeaderContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top" style = {{ padding: '10px'}}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <NavLink className="navbar-brand" to="/">
                              <img src = {logo} style = {{ height: '30px'}}/>
                            </NavLink>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right" >
                                <li className="text-bold"><NavLink to="/" activeClassName="active">HOME </NavLink> </li>
                                <li className="text-bold"><NavLink to="/earnwithus" activeClassName="active"  activeStyle = {{ color: 'pink'}}>EARN WITH US </NavLink></li>
                                <li className="text-bold"><NavLink to="/offers" activeClassName="active"  activeStyle = {{ color: 'pink'}}>OFFERS</NavLink></li>
                                <li className="text-bold"><NavLink to="/mobileapp" activeClassName="active"  activeStyle = {{ color: 'pink'}}>MOBILE APP</NavLink></li>
                                <li className="text-bold"><NavLink to="/login"  activeStyle = {{ color: 'pink'}}>LOGIN</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default HeaderContainer;