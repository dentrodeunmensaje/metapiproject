import "./App.css";
import Nav from "./components/Nav";
import Departments from "./components/Departments";
import React from "react";
import { Route } from "react-router-dom";
import History from "./components/History";
import Search from "./components/Search";
import Department from "./components/Department";
import Home from "./components/Home";

function App() {
  return (
    <div className="App" >
      <header className="header">
        <h1 className="mainTitle">A walk through </h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/The_Metropolitan_Museum_of_Art_Logo.svg" className="title-logo" alt="logo" />
        <hr />
      </header>
      <body>
      <Route path={"/"} component={Nav} />
      <Route exact path={"/"} component={Home} />
        <Route exact path={"/history"} component={History} />
        <Route exact path={"/departments"} component={Departments} />
        <Route exact path={"/search"} component={Search} />
        <Route exact path={"/departments/:id"} component={Department} /> 
      </body>
      <footer className="small text-center nav-bar fixed-bottom">
        <p className="fotterText">This Web App was created by <a href="https://www.linkedin.com/in/rodrigo-villarreal-j-28562452/">Rodrigo Villarreal Jiménez</a> as a programming portfolio project 2022</p>
        <p className="fotterText">All images, descriptions and other information are supplied by <a href="https://metmuseum.github.io/">The Met API</a></p>
        <p className="fotterText">Made with <a href="https://reactjs.org/">React</a> a JavaScript library for creating user interfaces</p>
      </footer>
    </div>
  );
}

export default App;
