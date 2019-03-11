import React from 'react'
import axios from 'axios'

import style from './style.module.scss'
import Card from '../../components/card'
import NavBar from '../../components/navBar'
import Header from '../../components/header'

class Home extends React.Component {
  state = {
    areas: [],
  }

  async componentDidMount() {
    let { data: areas } = await axios({
      method: 'get',
      url: '/areas',
    })
    // eslint-disable-next-line no-nested-ternary
    areas = areas.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
    this.setState({ areas })
  }

  handleSearch = (text) => {
    const { areas } = this.state

    const filteredAreas = areas.filter(a => (
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
            <div key={area._id} className={style.cardContainer}>
              <Card
                image={area.image}
                altImage={area.imageDescription}
                title={area.name}
                pathName={`area/${area._id}`}
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
