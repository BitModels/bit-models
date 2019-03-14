import React from 'react'
import axios from 'axios'

import { matchPropType } from '../../propTypes/router'
import style from './style.module.scss'
import Header from '../../components/header'
import NavBar from '../../components/navBar'

class Profile extends React.Component {
  state = {
    profile: {},
    isLoading: true,
  }

  async componentDidMount() {
    const { data: profile } = await axios({
      method: 'get',
      url: `/profiles/${this.props.match.params.id}`,
    })
    this.setState({ profile, isLoading: false })
  }

  render() {
    const { profile, isLoading } = this.state
    return (
      <div>
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
          <div className={style.profileContainer}>
            <main className={style.main}>
              <div className={style.titleContainer}>
                <h1 className={style.h1}>{profile.name}</h1>
                <h2 className={style.h2}>{profile.description}</h2>
              </div>
              <div className={style.contentContainer}>
                <article className={style.article}>
                  <section className={style.section}>
                    <h3 className={style.h3}>Sobre</h3>
                    <p className={style.p}>{profile.about}</p>
                  </section>

                  <section className={style.section}>
                    <h3 className={style.h3}>Trabalhos</h3>
                    <p className={style.p}>{profile.projects}</p>
                  </section>

                  <section className={style.section}>
                    <h3 className={style.h3}>
                    Acompanhe a
                      {' '}
                      {profile.name}
                    :
                    </h3>
                    <div className={style.linksContainer}>
                      {
                        // eslint-disable-next-line react/no-array-index-key
                        profile.links.map((l, key) => (<a className={style.a} href={l} target="_blank" rel="noopener noreferrer" key={key}>{l}</a>))
                      }
                    </div>
                  </section>
                </article>
                <aside className={style.aside}>
                  <img className={style.img} src={profile.image} alt={`foto de ${profile.name}`} />
                  <div>
                    <span className={style.infoTitle}>Localização: </span>
                    <span className={style.info}>{profile.location}</span>
                  </div>
                  <div>
                    <span className={style.infoTitle}>Educação: </span>
                    <span className={style.info}>{profile.education}</span>
                  </div>
                  <div className={style.line} />
                </aside>
              </div>
            </main>
          </div>
        )}
      </div>
    )
  }
}

Profile.propTypes = {
  match: matchPropType.isRequired,
}

export default Profile
