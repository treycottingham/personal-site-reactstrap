import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class Navigation extends Component {
  render() {
    return(
      <Navbar inverse style={{display:'flex', justifyContent: 'space-around'}}>
        <Navbar.Header >
          <Navbar.Brand>
            <Link to={`/`}>Trey Cottingham</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavDropdown eventKey={3} title="Navigation" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>
              <Link to={`Projects`}>Projects</Link>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.2}>
              <Link to={`Resume`}>Resume</Link>
            </MenuItem>
            {/* <MenuItem divider />
            <MenuItem eventKey={3.3}>
              <Link to={`Contact`}>Contact</Link>
            </MenuItem> */}
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}

export default Navigation