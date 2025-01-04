import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Link
} from "react-router-dom";

export default function Navbar(props) {
  let location = useLocation();
  return (
    
    <div>
    <nav className={`navbar bg-${props.mode} navbar-expand-lg bg-body-tertiary`} data-bs-theme={props.mode}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/home"?"active":""}`} aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"active":""}`}  to="./about">{props.aboutText}</Link>
              </li>
              <div className={`form-check form-switch text-${props.textcolor}  my-2 mx-2`} >
                    <input className="form-check-input"  type="checkbox" role="switch" onClick={props.toggelMode}  id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.theme}</label>
                </div>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search"  aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>

      </nav>

    </div>
  )
}
Navbar.propTypes={
    title: PropTypes.string,
    aboutText: PropTypes.string
}

