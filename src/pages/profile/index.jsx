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
                <h3 className={style.h3}>História</h3>
                <p className={style.p}>{profile.history}</p>
              </section>

              <section className={style.section}>
                <h3 className={style.h3}>Estudos</h3>
                <p className={style.p}>{profile.studies}</p>
              </section>

              <section className={style.section}>
                <h3 className={style.h3}>Trabalhos</h3>
                <p className={style.p}>{profile.work}</p>
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
              <div>
                <span className={style.infoTitle}>Passatempos: </span>
                <span className={style.info}>{profile.hobbies}</span>
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
