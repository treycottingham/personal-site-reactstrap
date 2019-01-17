import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Navbar, Nav, Image, NavItem, Grid, Row, Col, NavDropdown, MenuItem, Panel } from 'react-bootstrap'

class Landing extends Component {
  render() {
    return(
        <div>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <Image src={require('../profilepic.png')} circle />
              </Col>
              <Col xs={12} md={8}>
                <h2>Trey Cottingham</h2>
                <h4>Full-Stack Web Developer</h4>
                <p>I am a Web Developer with a passion for startups and learning new technologies. While working for a tech startup, I was drawn to the creativity that goes into writing code as well as the power of a few lines of text. I began to study Web Development in my free time.</p>
                <p>In July 2018, I finished a 6 month Web Development Immersive program through Galvanize, a coding school in Denver. Throughout the course I spent over 1000 hours writing code and learned numerous technologies such as React, Node.js, Express, Knex, Postgres, and others.</p>
                <p>I am currently balancing my time between founding a company in Boulder and delivering on a few freelance contracts. I am looking for a full-time position in Front-End or Back-End Development, primarily in Denver, but I am willing to relocate. To contact me, send me a message on LinkedIn or an email at trey.m.cottingham@gmail.com.</p>
              </Col>
            </Row>
            {/* <Row>
              <Col xs={6} md={4}>
                <Image src={require('../linkedin.png')} rounded style={{height: '10vh', width: '6vw'}} />
              </Col>
              <Col xs={6} md={4}>
                <Image src={require('../github.png')} rounded style={{height: '10vh', width: '6vw'}} />
              </Col>
              <Col xs={6} md={4}>
                <Image src={require('../profilepic.png')} circle style={{height: '10vh', width: '6vw'}} />
              </Col>
            </Row> */}
          </Grid>
        </div>
    )
  }
}

export default Landing