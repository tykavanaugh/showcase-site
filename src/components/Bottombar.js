import React from 'react'
import { Navbar,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Bottombar = (props) => {
  return (
  <>
  <nav className={`navbar navbar-${props.darkTheme === 'primary'? 'dark' : props.darkTheme} bg-${props.darkTheme} navbar-expand-lg`}>
    <div className="container-fluid justify-content-evenly">
      <Link to="https://github.com/tykavanaugh" style={{ textDecoration: 'none' }}>
        <div className={`m-3 link-${props.lightTheme} `}>Github</div>
      </Link>
      <Link to="https://www.linkedin.com/in/tykavanaugh/" style={{ textDecoration: 'none' }}>
        <div className={`m-3 link-${props.lightTheme} `}>LinkedIn</div>
      </Link>
      <Link to="https://stackoverflow.com/users/13619599/tyk" style={{ textDecoration: 'none' }}>
        <div className={`m-3 link-${props.lightTheme} `}>StackOverflow</div>
      </Link>
    </div>
  </nav>
  </>
  )
}

export default Bottombar