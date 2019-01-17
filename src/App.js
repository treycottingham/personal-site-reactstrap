import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navigation from './components/Navigation'
import Footer from './components/Footer'

import Landing from './components/Landing'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <Router style={{height: '100vh', width: '100vw'}}>
        <div className="App">
          <Navigation />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App