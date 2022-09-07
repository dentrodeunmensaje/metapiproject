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
    </div>
  );
}

export default App;
