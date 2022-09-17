import "./App.css";
import Nav from "./components/Nav";
import Departments from "./components/Departments";
import React from "react";
import ReactDOM from "react-dom/client";
import { Route } from "react-router-dom";
import History from "./components/History";
import Search from "./components/Search";
import Department from "./components/Department";

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <h1>A walk through the Met API</h1>
        <Route path={"/"} component={Nav} />
        <Route exact path={"/history"} component={History} />
        <Route exact path={"/departments"} component={Departments} />
        <Route exact path={"/search"} component={Search} />
        <Route exact path={"/departments/:id"} component={Department} /> 
      </header>
      <footer>
        <p>This Web App was created by <a href="https://www.linkedin.com/in/rodrigo-villarreal-j-28562452/">Rodrigo Villarreal Jiménez</a> as a programming portfolio project</p>
        <p>All images, descriptions and other information are supplied by <a href="https://metmuseum.github.io/">The Met API</a></p>
        <p>Made with <a href="https://reactjs.org/">React</a></p>
      </footer>
    </div>
  );
}

export default App;
