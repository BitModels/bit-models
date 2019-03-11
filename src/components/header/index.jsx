import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import style from './style.module.scss'
import SearchBar from '../searchBar'
import logo from '../../resources/logo-bitUs-verde.png'

class SearchHeader extends React.Component {
  state = {
    searchText: '',
  }

  handleSearchTextChange = ({ target: { value } }) => {
    this.setState({ searchText: value })
  }

  handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      this.props.onSearch(this.state.searchText)
    }
  }

  handleSearch = () => {
    this.props.onSearch(this.state.searchText)
  }

  render() {
    const { onSearch, placeholder } = this.props
    return (
      <header className={style.header}>
        <Link
          to="/"
          aria-hidden
          className={style.link}
        >
          <img className={style.img} src={logo} alt="logo" />
        </Link>
        { onSearch && (
          <SearchBar
            value={this.state.searchText}
            onChange={this.handleSearchTextChange}
            onClick={this.handleSearch}
            onKeyPress={this.handleKeyPress}
            placeholder={placeholder}

          />
        ) }
      </header>
    )
  }
}

SearchHeader.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
}

SearchHeader.defaultProps = {
  onSearch: null,
  placeholder: '',
}

export default SearchHeader
