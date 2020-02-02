import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Lists from "./component/lists";
import Navbar from "./component/navbar";
import About from "./component/about";
import EditList from "./component/editList";

function App() {
  return (
    <main className="container">
      <Navbar></Navbar>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/lists/:id" component={EditList} />
        <Route path="/lists" component={Lists} />
        <Redirect to="/lists" />
      </Switch>

      <div>Foot here</div>
    </main>
  );
}

export default App;
