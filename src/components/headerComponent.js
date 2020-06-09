import React, { Component } from "react";
import logo from "../assets/icon.jpeg";
import "../styles/Header.css";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

class HeaderComponent extends Component {
  state = {};
  render() {
    return (
      <div class="header">
        <div class="logoContainer">
          <img src={logo} class="logo" />
          <h2 class="heading">Reactify</h2>
        </div>
        <div class="rightContainer">
          <div>
            <ul class="linkContainer">
              <Link class="link" to="./home">
                Home
              </Link>

              <Link class="link" to="./catog">
                Category
              </Link>

              <Link class="link" to="./home">
                About
              </Link>
            </ul>
          </div>
          <div>
            <input class="input" />
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
