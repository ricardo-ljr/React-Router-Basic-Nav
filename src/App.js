import React from "react";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" />
    <Route exact path="/about" />
    <Route exact path="/contact" />
  </div>
);

export default App;
