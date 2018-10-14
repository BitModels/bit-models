import React from 'react'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Home from './pages/home'

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

/* eslint react/jsx-filename-extension: 0 */
const App = () => (
  <MuiThemeProvider theme={theme}>
    <Home />
  </MuiThemeProvider>)

export default App
