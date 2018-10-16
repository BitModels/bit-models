import React from 'react'

import SearchBar from '../../components/searchBar'

import style from './style.module.scss'
import logo from '../../resources/logo-bit-us-verde.png'
import NavButton from '../../components/navButton'

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
    const {
      searchText,
    } = this.state
    return (
      <div>
        <header className={style.header}>
          <img className={style.img} src={logo} alt="logo" />
          <SearchBar
            value={searchText}
            onChange={this.handleSearchTextChange}
            onClick={this.handleSearch}
            onKeyPress={this.handleKeyPress}
          />
        </header>
        <nav className={style.nav}>
          <ul className={style.ul}>
            <NavButton label="PERFIS" to="/perfis" />
            <NavButton label="FAÇA PARTE" to="/facaParte" />
            <NavButton label="SOBRE" to="/sobre" />
          </ul>
        </nav>
        <main>areas cards go here</main>
      </div>
    )
  }
}
export default Home
