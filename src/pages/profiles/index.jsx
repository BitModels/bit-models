import React from 'react'
import Icon from '@material-ui/core/Icon'
import { Link } from 'react-router-dom'

import style from './style.module.scss'
import profilesData from '../../testData/profiles'
import NavBar from '../../components/navBar'
import SearchHeader from '../../components/searchHeader'
import ProfileButton from '../../components/profileButton'

class Profiles extends React.Component {
  state = {
    profiles: profilesData,
  }

  handleSearch = (text) => {
    const filteredProfiles = profilesData.filter(a => (
      a.name.toLowerCase().includes(text.toLowerCase())
    ))

    this.setState({ profiles: filteredProfiles })
  }

  renderProfileButton = profile => (
    <Link
      to={{
        pathname: 'perfil',
        state: profile,
      }}
      aria-label={`ir para perfil de ${profile.name}`}
      key={profile.id}
      className={style.itemContainer}
    >
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
    </Link>
  )

  render() {
    const { profiles } = this.state
    return (
      <div>
        <SearchHeader
          onSearch={this.handleSearch}
          placeholder="Pesquisar"
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
        <main className={style.main}>
          {profiles.map(p => <ProfileButton profileData={p} />)}
        </main>
      </div>
    )
  }
}
export default Profiles
