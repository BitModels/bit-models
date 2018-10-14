import React from 'react'
import { Redirect } from 'react-router'

import SearchBar from '../../components/searchBar'

import './style.scss'
import logo from '../../resources/logo-bit-us-verde.png'
import Button from '../../components/button'

class Home extends React.Component {
  state = {
    searchText: '',
    redirectToAbout: false,
    redirectToProfiles: false,
    redirectToBePartOfIt: false,
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

  goToProfiles = () => {
    this.setState({ redirectToProfiles: true })
  }

  goToBePartOfIt = () => {
    this.setState({ redirectToBePartOfIt: true })
  }

  goToAbout = () => {
    this.setState({ redirectToAbout: true })
  }

  render() {
    const {
      searchText,
      redirectToAbout,
      redirectToProfiles,
      redirectToBePartOfIt,
    } = this.state

    if (redirectToAbout) {
      return <Redirect push to="/sobre" />
    }
    if (redirectToProfiles) {
      return <Redirect push to="/perfis" />
    }
    if (redirectToBePartOfIt) {
      return <Redirect push to="/facaParte" />
    }
    return (
      <div>
        <header>
          <img src={logo} alt="logo" />
          <SearchBar
            value={searchText}
            onChange={this.handleSearchTextChange}
            onClick={this.handleSearch}
            onKeyPress={this.handleKeyPress}
          />
        </header>
        <nav>
          <Button text="PERFIS" onClick={this.goToProfiles} />
          <Button text="FAÇA PARTE" onClick={this.goToBePartOfIt} />
          <Button text="SOBRE" onClick={this.goToAbout} />
        </nav>
      </div>
    )
  }
}
export default Home
