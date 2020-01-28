import React, { Component } from "react";
import "./App.css";
import Header from './container/Header';
import Search from './container/SearchContainer';
import WhyUs from './container/WhyUs';
import Work from './container/Works';
import City from './container/City';
import EarnWithUs from './container/EarnWithUs';
import Subscribe from './container/Subscribe';
import Footer from './container/Footer';
import Mobile from './container/Mobile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "headerContainer">
          <div>
            <Header></Header>
          </div>
          <div>
            <Search></Search>
          </div>
        </div>
        <div>
          <WhyUs></WhyUs>
        </div>
        {/* <div>
          <Work></Work>
        </div> */}
        {/* <div>
          <City></City>
        </div > */}
        <div>
          <EarnWithUs></EarnWithUs>
        </div>
        <div>
          <Mobile></Mobile>
        </div>
        <div>
          <Subscribe></Subscribe>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;