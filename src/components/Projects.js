import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Navbar, Carousel, Nav, Image, NavItem, NavDropdown, MenuItem, Panel } from 'react-bootstrap'

class Projects extends Component {
  render() {
    return(
        <Carousel interval={null}>
          <Carousel.Item>
            <Image src={require('../RoadRewards.png')} style={{height: '70vh', width: '100vw'}} />
            <Carousel.Caption>
              <h3>RoadRewards App</h3>
              <p>This mobile application is a prototype built for a company I am co-founding in Boulder, CO.  The app rewards safe driving with discounts and rewards at partner businesses.  Currently still in development.  Technologies Used: React Native, Nativebase, Heroku, Firebase Auth.<a href="">  Demo Here.</a></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={require('../company.png')} style={{height: '70vh', width: '100vw'}} />
            <Carousel.Caption>
              <h3>Group Project</h3>
              <p>This full-stack web app was built by me and 3 others in a team using Agile Methodologies.  The app is for job seekers who want to track their progress, contacts, and important dates. <a href="https://mojobtake4.firebaseapp.com/landing">Link Here.</a>  Technology used: React, Semantic UI, Heroku.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={require('../LOTRipsum.png')} style={{height: '70vh', width: '100vw'}} />
            <Carousel.Caption>
              <h3>Lord of the Rings Quote Generator</h3>
              <p>This is a full-stack project built within a one-week deadline.  It is a Lord of the Rings random quote generator.  Its primary purpose is to populate generic web pages.  <a href="https://lordoftheripsum.firebaseapp.com/">Link Here.</a>  Technologies Used: React, Heroku.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    )
  }
}

export default Projects