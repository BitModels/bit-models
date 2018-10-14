import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.scss'
import App from './App'
import About from './pages/about'
import BePartOfIt from './pages/bePartOfIt'
import Profiles from './pages/profiles'

/* eslint react/jsx-filename-extension: 0 no-undef: 0 */
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/sobre" component={About} />
      <Route path="/facaParte" component={BePartOfIt} />
      <Route path="/perfis" component={Profiles} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
