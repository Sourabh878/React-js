import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export default function Navbar(props) 
{
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width:"400px"
  };

  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary`} data-bs-theme={props.theme}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">TextUtils</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <div style={style}>
            <div className="form-check form-switch">
              <input 
                className="form-check-input" 
                type="checkbox" 
                onClick={props.toggoleG} 
                role="switch" 
                id="flexSwitchCheckGreenDark" 
              />
              <label className={`form-check-label text-${props.theme === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckGreenDark">
                Enable GreenDark Mode
              </label>
            </div>
            <div className="form-check form-switch">
              <input 
                className="form-check-input" 
                type="checkbox" 
                onClick={props.toggle} 
                role="switch" 
                id="flexSwitchCheckDarkMode" 
              />
              <label className={`form-check-label text-${props.theme === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDarkMode">
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
