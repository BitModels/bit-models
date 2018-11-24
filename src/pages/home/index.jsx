import React from 'react'

import style from './style.module.scss'
import Card from '../../components/card'
import NavBar from '../../components/navBar'
import Header from '../../components/header'
import areasData from '../../testData/areas'

class Home extends React.Component {
  state = {
    areas: areasData,
  }

  handleSearch = (text) => {
    const filteredAreas = areasData.filter(a => (
      a.name.toLowerCase().includes(text.toLowerCase())
    ))

    this.setState({ areas: filteredAreas })
  }

  render() {
    const { areas } = this.state
    return (
      <div>
        <Header
          onSearch={this.handleSearch}
          searchBar
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
                pathName="area"
                areaData={area}
                ariaLabel={`card que redireciona para mais detalhes da área ${area.name}`}
              />
            </div>
          ))}
        </main>
      </div>
    )
  }
}
export default Home
