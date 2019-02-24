import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import axios from './axios';

class App extends Component {
  state={};
  onLogin = () => {
    axios
    .get("/api/auth/fb")
    .then(response=>{
      console.log(response);
    })
    .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Login onLogin = {this.onLogin}/>
        </header>
      </div>
    );
  }
}

export default App;
