import React from 'react'

const Topbar = () => {
  return (
  <>
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Home</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#welcome">Welcome</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#aboutme">About me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Topbar