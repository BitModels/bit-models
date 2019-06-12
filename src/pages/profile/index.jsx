import React from 'react'
import axios from 'axios'
import classNames from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Link } from "react-router-dom"
import { matchPropType, locationPropType } from '../../propTypes/router'
import style from './style.module.scss'
import Header from '../../components/header'
import NavBar from '../../components/navBar'
import { selectImage } from '../../utils'

class Profile extends React.Component {
  state = {
    profile: {},
    profiles: [],
    id: null,
    isLoading: true,
    previous: '',
    next: '',
    showPreviousButton: false,
    showNextButton: false
  }

  async componentDidMount() {
    await this.getProfile()
  }

  async componentDidUpdate() {
    const { id } = this.state

    if(id !== this.props.match.params.id) {
      await this.getProfile()
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ previousLoading: false, nextLoading: false})
    }
  }

  getProfile = async () => {
    const { data: profile } = await axios({
      method: 'get',
      url: `/profiles/${this.props.match.params.id}`,
    })

    if (!profile.image) {
      profile.image = selectImage(new Date(profile.updatedAt))
    }
    // eslint-disable-next-line react/no-did-update-set-state
    this.setState({
      id: this.props.match.params.id,
      profile,
      isLoading: false
    })
    if (this.props.location.state && this.props.location.state.profiles) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        profiles: this.props.location.state.profiles
      })
      this.selectProfile()
    }
  }

  selectProfile = async () => {
    const { id } = this.props.match.params
    const { profiles } = this.state
    const index = profiles.findIndex(a => (a._id === id))

    if (index < 0) {
      this.setState({ showPreviousButton: false, showNextButton: false })
    } else {
      let next
      let previous

      if (index > 0) {
        previous = `/perfil/${profiles[index - 1]._id}`
      }

      if (index < (profiles.length-1)) {
        next = `/perfil/${profiles[index + 1]._id}`
      }

      if (index === (profiles.length-1)) {
        this.setState({ showPreviousButton: true, showNextButton: false, previous, next: '' })
      } else if (index === 0) {
        this.setState({ showPreviousButton: false, showNextButton: true, next, previous: '' })
      } else {
        this.setState({ showPreviousButton: true, showNextButton: true, previous, next })
      }
    }
  };

  render() {
    const { profile,
      isLoading,
      previous,
      next,
      showPreviousButton,
      showNextButton,
      profiles,
      previousLoading,
      nextLoading } = this.state
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
                      {profile.socialNetwork}
                    </div>
                  </section>

                  <div className={classNames(style.buttonsContainer, {
                    [style.flexEnd]: !showPreviousButton,
                    [style.spaceBetween]: showPreviousButton
                  })}>
                    {showPreviousButton && (
                      <li className={style.li}>
                        <Link
                          to={{
                            pathname: previous,
                            state: { profiles }
                          }}
                          replace
                          aria-label="anterior"
                          className={style.link}
                          onClick={() => {this.setState({previousLoading: true})}}
                        >
                          {previousLoading ? <CircularProgress size={20} style={{color: '#FFF'}} /> : 'anterior'}
                        </Link>
                      </li>
                    )}
                    {showNextButton && (
                      <li className={style.li}>
                        <Link
                          to={{
                            pathname: next,
                            state: { profiles }
                          }}
                          replace
                          aria-label="próximo"
                          className={style.link}
                          onClick={() => {this.setState({nextLoading: true})}}
                        >
                          {nextLoading ? <CircularProgress size={20} style={{color: '#FFF'}} /> : 'próximo'}
                        </Link>
                      </li>
                    )}
                  </div>
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
  location: locationPropType.isRequired,
  match: matchPropType.isRequired,
}

export default Profile
