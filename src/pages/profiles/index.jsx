import React from 'react'
import Icon from '@material-ui/core/Icon'

import profiles from '../../testData/profiles'
import style from './style.module.scss'
import NavButton from '../../components/navButton'
import SearchHeader from '../../components/searchHeader'

class Profiles extends React.Component {
  handleSearch = (e) => {
    console.log(e)
  }

  renderProfileButton = profile => (
    <div key={profile.id} className={style.itemContainer}>
      <div className={style.iconContainer}>
        <Icon className={style.icon}>computer</Icon>
      </div>
      <div className={style.dataContainer}>
        <span className={style.name}>
          {profile.name}
        </span>
        <span>
          {profile.description}
        </span>
      </div>
    </div>
  )

  render() {
    return (
      <div>
        <SearchHeader
          onSearch={this.handleSearch}
        />
        <nav className={style.nav}>
          <ul className={style.ul}>
            <NavButton label="INÍCIO" to="/" />
            <NavButton label="FAÇA PARTE" to="/facaParte" />
            <NavButton label="SOBRE" to="/sobre" />
          </ul>
        </nav>
        <main className={style.main}>
          {profiles.map(p => this.renderProfileButton(p))}
        </main>
      </div>
    )
  }
}
export default Profiles
