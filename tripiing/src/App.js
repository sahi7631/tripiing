import React, { Component } from "react";
import "./App.css";
import Home from './container/Home';
import AppRouter from './Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter>
          <Home />
        </AppRouter>
      </div>
    );
  }
}

export default App;