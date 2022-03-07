import React from 'react'
import { Navbar,Nav} from 'react-bootstrap'

const Bottombar = (props) => {
  return (
  <>
  <nav className="navbar navbar-dark bg-light navbar-expand-lg">
    <div className="container-fluid justify-content-evenly">
      <div className="m-3">Github</div>
      <div className="m-3">LinkdIn</div>
      <div className="m-3">StackOverflow</div>
    </div>
  </nav>
  </>
  )
}

export default Bottombar