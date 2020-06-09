import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/headerComponent";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/homeScreen";
import CatogComponent from "./components/catogComponent";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Route path="/home" component={HomeScreen} />
      <Route path="/catog" component={CatogComponent} />
    </BrowserRouter>
  );
}

export default App;
