import React, { Component } from "react";

class NavLogout extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">
          Gestor de citas
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Calendario <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Mis solicitudes <span className="sr-only">(current)</span>
              </a>
            </li>
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Denilson Granados"
              aria-label="Search"
              disabled
            />
            <button
              className="btn my-2 my-sm-0 Buttons"
              type="submit"
            >
              Desconectar
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavLogout;