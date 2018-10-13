import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.scss'
import App from './App'

/* eslint react/jsx-filename-extension: 0 no-undef: 0 */
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
