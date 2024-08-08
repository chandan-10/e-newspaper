import React, { Component } from "react";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-black bg-dark">
          <a className="navbar-brand" href="#">
            Home
          </a>
          

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/sports">
                  <b>sports</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/business">
                  <b>business</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/entertainment">
                  <b>entertainment</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/general">
                  <b>general</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/science">
                  <b>science</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/health">
                  <b>health</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/technology">
                  <b>technology</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/weather">
                  <b>weather</b>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
