import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon'

import style from './style.module.scss'

const SearchBar = ({
  value, onChange, onClick, placeholder, ...rest
}) => (
  <div className={style.container}>
    <div className={style.spacing} />
    <input
      onChange={onChange}
      className={style.input}
      value={value}
      type="text"
      name="search bar"
      aria-label="Pelo que você se interessa?"
      placeholder={placeholder || 'Pelo que você se interessa?'}
      {...rest}
    />
    <button
      type="submit"
      className={`${style.spacing} ${style.button}`}
      onClick={onClick}
      aria-label="pesquisar"
    >
      <Icon>search</Icon>
    </button>
  </div>
)

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default SearchBar
