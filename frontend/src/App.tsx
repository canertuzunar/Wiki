import i18next from 'i18next';
import React, { useEffect } from 'react';
import { Switch, Route, useLocation} from'react-router-dom'
import { Content, Home } from './pages';
import './util/master.scss'
import {useStore} from'./util/store/store'
import resources from'./util/localize/resources'

i18next.init({
  resources,
  lng: "en"
})

const App = () => {
  const location = useLocation()
  const {state, dispatch} = useStore()
  const detectRoute = () => {
    dispatch({type:"setShadow", value:false})
    console.log(location, state)
  }
  useEffect(() => {
    detectRoute()
  },[location])  
  return (
        <Switch>
          <Route path="/content">
            <Content/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
  )
}

export default App

