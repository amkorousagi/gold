import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import sub from "./logo_header.png"
import {useHistory} from "react-router-dom"

const Home = ()=> {
    const his = useHistory()
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Golden life</h1>
          <img src={sub} onClick={()=>{his.push("/")}}/>
        </header>
      </div>
    );
  
}

export default Home;