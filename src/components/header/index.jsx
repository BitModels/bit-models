import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.module.scss'
import logo from '../../resources/logo-bitUs-verde.png'

const BePartOfIt = () => (
  <header className={style.header}>
    <Link
      to="/"
      aria-hidden
      className={style.link}
    >
      <img className={style.img} src={logo} alt="logo" />
    </Link>
  </header>
)

export default BePartOfIt
