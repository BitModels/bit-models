import React from 'react'

import style from './style.module.scss'
import Header from '../../components/header'
import NavBar from '../../components/navBar'

class Profiles extends React.Component {
  handleSearch = (e) => {
    console.log(e)
  }

  render() {
    const profile = this.props.history.location.state
    return (
      <div>
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
        <div className={style.profileContainer}>
          <main className={style.main}>
            <article className={style.article}>
              <h1 className={style.h1}>{profile.name}</h1>
              <h2 className={style.h2}>{profile.description}</h2>

              <section className={style.section}>
                <h3 className={style.h3}>Sobre</h3>
                <p className={style.p}>{profile.about}</p>
              </section>

              <section className={style.section}>
                <h3 className={style.h3}>Trabalhos</h3>
                <p className={style.p}>{profile.work}</p>
              </section>

              <section className={style.section}>
                <h3 className={style.h3}>
                  Acompanhe a
                  {' '}
                  {profile.name}
                  :
                </h3>
                <div className={style.linksContainer}>
                  {profile.links.map(l => (<a className={style.a} href={l} target="_blank" rel="noopener noreferrer">{l}</a>))}
                </div>
              </section>
            </article>
            <aside className={style.aside}>
              <img className={style.img} src={profile.image} alt="logo" />
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
          </main>
        </div>
      </div>
    )
  }
}
export default Profiles
