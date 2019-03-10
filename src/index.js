import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import './index.scss'
import App from './App'
import About from './pages/about'
import BePartOfIt from './pages/bePartOfIt'
import Profiles from './pages/profiles'
import Profile from './pages/profile'
import Area from './pages/area'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#CE7477',
    },
    secondary: {
      main: '#BA96C7',
    },
  },
})

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

/* eslint react/jsx-filename-extension: 0 no-undef: 0 */
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route path="/sobre" component={About} />
        <Route path="/facaParte" component={BePartOfIt} />
        <Route path="/perfis" component={Profiles} />
        <Route path="/perfil" component={Profile} />
        <Route path="/area" component={Area} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root'),
)
