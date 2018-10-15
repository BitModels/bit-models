import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './style.scss'

const NavButton = ({ label, to }) => (
  <li className="container">
    <Link to={to}>{label}</Link>
  </li>

)

NavButton.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default NavButton
