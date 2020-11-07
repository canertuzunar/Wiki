import React from 'react';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom'
import { Content, Home } from './pages';
import './util/master.scss'


const App = () => {
    return (
      <Router>
        <Switch>
        <Route path="/content">
          <Content/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
        </Switch>
      </Router>
    )
}

export default App

