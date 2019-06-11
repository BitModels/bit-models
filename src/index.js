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
import { Login, AdminHome } from './pages/admin'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#CE7477',
    },
    secondary: {
      main: '#BA96C7',
    },
  },
  overrides: {
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "#4286f4",
          fontWeight: "bold"
        },

      }
    },
    MuiInput: {
      underline: {
        '&:after': {
          borderBottom: "2px solid #4286f4"
        }
      }
    },
    MuiOutlinedInput :{
      root: {
        '&$focused $notchedOutline': {
          borderColor: "#4286f4",
          borderWidth: 2,
        },
      }
    }
  }
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
        <Route path="/perfil/:id" component={Profile} />
        <Route path="/area/:id" component={Area} />
        <Route path="/admin" component={Login} />
        <Route path="/admin-home" component={AdminHome} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root'),
)
