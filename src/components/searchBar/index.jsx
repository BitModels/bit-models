import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@material-ui/core/Icon'

import './style.scss'

const SearchBar = ({
  value, onChange, onClick, ...rest
}) => (
  <div className="container">
    <div className="spacing" />
    <input
      onChange={onChange}
      value={value}
      type="text"
      name="search bar"
      placeholder="Pelo que você se interessa?"
      {...rest}
    />
    <button
      type="submit"
      className="spacing"
      onClick={onClick}
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
