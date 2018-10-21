import React from 'react'

import style from './style.module.scss'
import NavButton from '../../components/navButton'
import Card from '../../components/card'
import areas from '../../testData/areas'
import SearchHeader from '../../components/searchHeader'

class Home extends React.Component {
  handleSearch = (e) => {
    console.log(e)
  }

  render() {
    return (
      <div>
        <SearchHeader
          onSearch={this.handleSearch}
        />
        <nav className={style.nav}>
          <ul className={style.ul}>
            <NavButton label="PERFIS" to="/perfis" />
            <NavButton label="FAÇA PARTE" to="/facaParte" />
            <NavButton label="SOBRE" to="/sobre" />
          </ul>
        </nav>
        <main className={style.main}>
          {areas.map(area => (
            <div key={area.id} className={style.cardContainer}>
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
