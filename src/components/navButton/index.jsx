import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import style from './style.module.scss'

const NavButton = ({ label, to }) => (
  <li className={style.container}>
    <Link to={to} aria-label={label.toLowerCase()}>{label}</Link>
  </li>
)

NavButton.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default NavButton
