import React from 'react'
import PropTypes from 'prop-types'

const Navbar = (props) => (
  <div>
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">TextUtils</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>


          </ul>

        </div>
      </div>

      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
      </div>
    </nav></div>
)

export default Navbar;
