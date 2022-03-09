import React from 'react'
import { Navbar,Nav, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiOutlineGithub,AiOutlineLinkedin } from 'react-icons/ai'
import { BsStackOverflow } from 'react-icons/bs'

const Bottombar = (props) => {
  return (
  <>
  <nav className={`navbar navbar-${props.darkTheme === 'primary'? 'dark' : props.darkTheme} bg-${props.darkTheme} navbar-expand-lg`}>
    <div className="container-fluid justify-content-evenly">
      <Link to="https://github.com/tykavanaugh" style={{ textDecoration: 'none' }}>
        <Button variant={`outline-${props.lightTheme}`}>Github &nbsp;<AiOutlineGithub size={28}/></Button>
      </Link>
      <Link to="https://www.linkedin.com/in/tykavanaugh/" style={{ textDecoration: 'none' }}>
        <Button variant={`outline-${props.lightTheme}`}>LinkedIn &nbsp;<AiOutlineLinkedin size={28}/></Button>
      </Link>
      <Link to="https://stackoverflow.com/users/13619599/tyk" style={{ textDecoration: 'none' }}>
        <Button variant={`outline-${props.lightTheme}`}>Stack Overflow &nbsp;<BsStackOverflow size={28}/></Button>
      </Link>
    </div>
  </nav>
  </>
  )
}

export default Bottombar