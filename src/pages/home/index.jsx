import React from 'react'

import style from './style.module.scss'
import Card from '../../components/card'
import NavBar from '../../components/navBar'
import SearchHeader from '../../components/searchHeader'
import areas from '../../testData/areas'

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
        <NavBar
          buttons={[
            {
              label: 'PERFIS',
              to: '/perfis',
            },
            {
              label: 'FAÇA PARTE',
              to: '/facaParte',
            },
            {
              label: 'SOBRE',
              to: '/sobre',
            },
          ]}
        />
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
