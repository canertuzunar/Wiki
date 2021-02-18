import i18next from 'i18next'
import React, { useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { Content, Home, List } from './pages'
import './util/master.scss'
import { useStore } from './util/store/store'
import resources from './util/localize/resources'
import { NoMatch, RouteWithError } from './components'

i18next.init({
  resources,
  lng: 'en'
})

const App = () => {
  const location = useLocation()
  const { dispatch } = useStore()
  const detectRoute = () => {
    dispatch({ type: 'setShadow', value: false })
    dispatch({ type: 'setMenu', value: false })
  }
  useEffect(() => {
    detectRoute()
  }, [location])
  return (
    <Switch>
      <RouteWithError exact path="/content/:id">
        <Content />
      </RouteWithError>
      <RouteWithError exact path="/:listType">
          <List />
      </RouteWithError>
      <RouteWithError exact path="/">
        <Home />
      </RouteWithError>
      <Route component={ NoMatch } />
    </Switch>
  )
}

export default App
