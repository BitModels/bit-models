import React from 'react'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'

import { matchPropType } from '../../propTypes/router'
import Header from '../../components/header'
import NavBar from '../../components/navBar'
import ProfileButton from '../../components/profileButton'
import style from './style.module.scss'

class Area extends React.Component {
  state = {
    areaData: {},
    isLoading: true,
  }

  async componentDidMount() {
    const { data: areaData } = await axios({
      method: 'get',
      url: `/areas/${this.props.match.params.id}`,
    })
    this.setState({ areaData, isLoading: false })
  }

  render() {
    const { areaData, isLoading } = this.state
    return (
      <div className={style.container}>
        <Header
          searchBar={false}
        />
        <NavBar
          buttons={[
            {
              label: 'INÍCIO',
              to: '/',
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
        {!isLoading && (
          <div className={style.areaContainer}>
            <article className={style.article}>
              <div className={style.articleContent}>
                <h1 className={style.h1}>{areaData.name}</h1>
                <img className={style.img} src={areaData.image} alt={areaData.imageDescription} />
                <div className={style.p}>{ReactHtmlParser(areaData.description)}</div>
              </div>
            </article>
            <aside className={style.aside}>
              {areaData.profiles.length > 0 && (
                <div>
                  <h2 className={style.h2}>Conheça mulheres da área</h2>
                  {this.state.areaData.profiles.map(p => (
                    <ProfileButton profileData={p} key={p._id} />
                  ))}
                </div>
              )}
            </aside>
          </div>
        )}
      </div>
    )
  }
}

Area.propTypes = {
  match: matchPropType.isRequired,
}

export default Area
