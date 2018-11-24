import React from 'react'
import ReactHtmlParser from 'react-html-parser'

import Header from '../../components/header'
import NavBar from '../../components/navBar'
import ProfileButton from '../../components/profileButton'
import Fernanda from '../../testData/fernanda'
import style from './style.module.scss'

class Area extends React.Component {
  state = {
    profiles: [
      Fernanda,
    ],
  }

  handleSearch = (e) => {
    console.log(e)
  }

  renderProfiles = () => (
    <div>
      <h2 className={style.h2}>Conheça mulheres da área</h2>
      {this.state.profiles.map(p => (
        <ProfileButton profileData={p} />
      ))}
    </div>
  )

  render() {
    const areaData = this.props.history.location.state
    const { profiles } = this.state
    return (
      <div className={style.container}>
        <Header />
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
        <div className={style.areaContainer}>
          <article className={style.article}>
            <div className={style.articleContent}>
              <h1 className={style.h1}>{areaData.name}</h1>
              <img className={style.img} src={areaData.image} alt={areaData.imageDescription} />
              <p className={style.p}>{ReactHtmlParser(areaData.description)}</p>
            </div>
          </article>
          <aside className={style.aside}>
            {profiles.length > 0 && this.renderProfiles()}
          </aside>
        </div>
      </div>
    )
  }
}
export default Area
