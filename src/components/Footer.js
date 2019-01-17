import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Navbar, Nav, Image, Button, NavItem, NavDropdown, MenuItem, Panel } from 'react-bootstrap'

class Footer extends Component {
  render() {
    return(
        <Panel style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: '0', bottom: '0', right: '0', marginBottom: '0'}}>
          {/* <Panel.Body>Contact Trey</Panel.Body> */}
          <Button href="/contact" bsSize="large" bsStyle="primary">Contact</Button>
          {/* <Image src={require('../github.png')} style={{height: '4vh', width: '3vw'}} />
          <Image src={require('../linkedin.png')} style={{height: '4vh', width: '3vw'}} /> */}
        </Panel>
    )
  }
}

export default Footer