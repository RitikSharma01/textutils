
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'




export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">{props.homeText} <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about">{props.aboutText} <span className="sr-only">(current)</span></Link>
          </li>



        </ul>
        <div className="custom-control custom-switch ">
          <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1" />

          <label className={`custom-control-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="customSwitch1">Enable Dark mode</label>
        </div>
      </div>
    </nav>
  )

}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: "Set Title",
  aboutText: "Set About"
}