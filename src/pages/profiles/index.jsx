import React from 'react'

import style from './style.module.scss'
import logo from '../../resources/logo-bit-us-verde.png'

class Profiles extends React.Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} alt="logo" />
        </header>
        <div>
        Profiles
        </div>
      </div>
    )
  }
}
export default Profiles
