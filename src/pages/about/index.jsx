import React from 'react'

import style from './style.module.scss'
import logo from '../../resources/logo-bit-us-verde.png'

class About extends React.Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} alt="logo" />
        </header>
        <div>
        About
        </div>
      </div>
    )
  }
}
export default About
