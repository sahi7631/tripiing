import React from 'react';
import HeaderContainerAbstract from './HeaderContainerAbstract';
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';

class HeaderContainer extends HeaderContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#myPage">
                              <img src = {logo}  style = {{ height: '30px'}}/>
                            </a>
                        </div>

                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/">HOME</a></li>
                                <li><a href="/earnwithus">EARN WITH US</a></li>
                                <li><Link to="/offers">OFFERS</Link></li>
                                <li><Link to="/mobileapp">MOBILE APP</Link></li>
                                <li><a href="/login">LOGIN</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default HeaderContainer;