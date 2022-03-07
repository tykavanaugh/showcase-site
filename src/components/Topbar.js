import React from 'react'
import ThemeSelector from './ThemeSelector'
import { HashLink } from 'react-router-hash-link';

const Topbar = (props) => {
  return (
  <>
  <nav className={`navbar navbar-${props.darkTheme === 'primary'? 'dark' : props.darkTheme} bg-${props.darkTheme} navbar-expand-lg`}>
    <div className="container-fluid">
      <HashLink className="navbar-brand" to="#">Ty Kavanaugh</HashLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <HashLink smooth className="nav-link" to="/welcome">Welcome</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth className="nav-link" to="/aboutme">About me</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth className="nav-link" to="/education">Education</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth className="nav-link" to="/skills">Skills</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth className="nav-link" to="/projects">Projects</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth className="nav-link" to="/contact">Contact</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth className="nav-link active" to="/socials">Socials</HashLink>
          </li>
        </ul>
        <ThemeSelector 
          toggleColor={props.toggleColor} 
          toggleTheme={props.toggleTheme} 
          lightTheme={props.lightTheme} 
          darkTheme={props.darkTheme} 
          textTheme={props.textTheme} 
        />
      </div>
    </div>
  </nav>
  </>
  )
}

export default Topbar