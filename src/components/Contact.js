import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Navbar, Nav, Grid, Row, Col, Image, NavItem, NavDropdown, MenuItem, Panel } from 'react-bootstrap'

class Contact extends Component {
  render() {
    return(
        <div>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <Image src={require('../linkedin.png')} rounded style={{height: '10vh', width: '6vw'}} />
              </Col>
              <Col xs={6} md={4}>
                <Image src={require('../github.png')} rounded style={{height: '10vh', width: '6vw'}} />
              </Col>
              <Col xs={6} md={4}>
                <Image src={require('../profilepic.png')} circle style={{height: '10vh', width: '6vw'}} />
              </Col>
            </Row>
          </Grid>  
        </div>
    )
  }
}

export default Contact