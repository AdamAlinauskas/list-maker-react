import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Lists from "./component/lists";
import Navbar from "./component/navbar";
import About from "./component/about";
import EditList from "./component/editList/editList";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <main className="container">
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/lists/:id" component={EditList} />
        <Route path="/lists" component={Lists} />
        <Redirect to="/lists" />
      </Switch>

      <footer className="border-top">
        <div className="row justify-content-md-center footer">Foot here</div>
      </footer>
    </main>
  );
}

export default App;
