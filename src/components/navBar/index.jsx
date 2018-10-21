import React from 'react'
import PropTypes from 'prop-types'

import style from './style.module.scss'
import NavButton from '../navButton'

const NavBar = ({ buttons }) => (
  <nav className={style.nav}>
    <ul className={style.ul}>
      {buttons.map(b => (
        <NavButton label={b.label} to={b.to} key={b.to} />
      ))}
    </ul>
  </nav>
)

NavBar.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default NavBar
