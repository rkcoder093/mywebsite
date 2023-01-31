import React, { Component } from "react";

export class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg" style={{'backgroundColor':'#6687bd'}}>
          <div className="container-fluid" >
            <a className="navbar-brand" href="/">
              PORTFILIO
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
