import React from 'react'

import SearchBar from '../../components/searchBar'

import './style.scss'
import logo from '../../resources/logo-bit-us-verde.png'

class Home extends React.Component {
  state = {
    searchText: '',
  }

  handleSearchTextChange = ({ target: { value } }) => {
    this.setState({ searchText: value })
  }

  handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      console.log('do validate')
    }
  }

  handleSearch = (e) => {
    console.log(e)
  }

  render() {
    const { searchText } = this.state
    return (
      <header>
        <img src={logo} alt="logo" />
        <SearchBar
          value={searchText}
          onChange={this.handleSearchTextChange}
          onClick={this.handleSearch}
          onKeyPress={this.handleKeyPress}
        />
      </header>
    )
  }
}
export default Home
