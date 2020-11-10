import i18next from 'i18next';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom'
import { Content, Home } from './pages';
import './util/master.scss'
import {StoreProvider} from'./util/store/store'
import resources from'./util/localize/resources'

i18next.init({
  resources,
  lng: "en"
})

const App = () => {
    return (
      <StoreProvider>
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
      </StoreProvider>
    )
}

export default App

