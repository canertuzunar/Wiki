import i18next from 'i18next';
import React, { useEffect } from 'react';
import { Switch, Route, useLocation} from'react-router-dom'
import { Content, Home } from './pages';
import './util/master.scss'
import {StoreProvider, useStore} from'./util/store/store'
import resources from'./util/localize/resources'

i18next.init({
  resources,
  lng: "en"
})

const App = () => {
  const location = useLocation()
  console.log(location)
  useEffect(() => {
    const{state, dispatch} = useStore()
    dispatch({type:"setShadow", value:false})
  },[location])  
  return (
      <StoreProvider>
        <Switch>
        <Route path="/content">
          <Content/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
        </Switch>
      </StoreProvider>
  )
}

export default App

