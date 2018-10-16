import React from 'react'

import SearchBar from '../../components/searchBar'

import style from './style.module.scss'
import logo from '../../resources/logo-bit-us-verde.png'
import NavButton from '../../components/navButton'
import Card from '../../components/card'
import areas from '../../testData/areas'

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
        <main className={style.main}>
          {areas.map(area => (
            <div className={style.cardContainer}>
              <Card
                key={area.id}
                image={area.image}
                altImage={area.imageDescription}
                title={area.name}
                content={area.description}
              />
            </div>
          ))}
        </main>
      </div>
    )
  }
}
export default Home
