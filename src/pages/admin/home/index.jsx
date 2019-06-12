import React from 'react'
import axios from "axios"
import PropTypes from "prop-types"
import classNames from 'classnames'
import Button from "@material-ui/core/Button"
import LinesEllipsis from 'react-lines-ellipsis'
import CircularProgress from '@material-ui/core/CircularProgress'
import { historyPropType } from "../../../propTypes/router"
import { withMatchMedia } from '../../../HOCs'
import Header from '../../../components/header'
import { selectImage } from '../../../utils'
import style from './style.module.scss'

class AdminHome extends React.Component {
  state = {
    loading: false,
    errorMessage: '',
    profiles: [],
    profile: { _id: ''}
  }

  async componentDidMount() {
    try {
      const token = localStorage.getItem('token') ||  ""
      const { data: profiles } = await axios({
        method: 'get',
        url: '/adminGetProfiles',
        params: {
          token
        }
      })

      let updatedProfiles = profiles.sort((a, b) =>
        (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()))

      updatedProfiles = updatedProfiles.map((p) => {
        let newP = { ...p }
        if (!p.image) {
          newP = {
            ...p,
            image: selectImage(new Date(p.updatedAt))
          }
        }
        console.log('teste:', p, newP)
        return newP
      })

      this.setState({ profiles: updatedProfiles })
    } catch (error) {
      const { history } = this.props
      if(error && error.response && error.response.status === 401) {
        history.push('/admin')
      } else {
        this.setState({ errorMessage: 'Um erro inesperado ocorreu.'})
      }
    }
  }

  goToprofile = (profile) => {
    const { history } = this.props
    history.push(`/perfil/${profile._id}`)
  }

  enableProfile = async (profile) => {
    try {
      const { profiles } = this.state
      this.setState({ loading: true, profile })
      const token = localStorage.getItem('token') ||  ""

      const { data: profileResponse } = await axios({
        method: "post",
        url: "/enableProfile",
        params: {
          token,
          id: profile._id,
          enable: !profile.active
        }
      })

      const newProfiles = [...profiles]
      const index = profiles.findIndex(item => item._id === profile._id)
      newProfiles.splice(index, 1)
      let updatedProfiles = [...newProfiles, {...profileResponse, image: profile.image}]

      updatedProfiles = updatedProfiles.sort((a, b) =>
        (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()))

      this.setState({ loading: false, profiles: updatedProfiles } )

    } catch(error) {
      this.setState({loading: false, errorMessage: 'Um erro inesperado ocorreu.'})
    }
  }

  renderItem = (profile) => {
    const { loading, profile: selectedProfile } = this.state
    const { isMediumScreen } = this.props
    const buttonText = profile.active ? 'desativar' : 'ativar'

    return (
      <div key={profile._id} className={style.profileContainer}>
        <div className={style.dataContainer}>
          <img className={style.img} src={profile.image} alt={`imagem de perfil da ${profile.name}`} />
          <div>
            {!isMediumScreen ?
              <div className={style.textContainer}>
                <LinesEllipsis
                  className={style.name}
                  text={profile.name}
                  maxLine='1'
                  ellipsis='...'
                  trimRight
                  basedOn='letters'
                />
                <LinesEllipsis
                  text={profile.location}
                  maxLine='1'
                  ellipsis='...'
                  trimRight
                  basedOn='letters'
                />
                <LinesEllipsis
                  text={profile.description}
                  maxLine='1'
                  ellipsis='...'
                  trimRight
                  basedOn='letters'
                />
              </div>
              :
              <div className={style.textContainer}>
                <div className={classNames(style.name, style.text)}>{profile.name}</div>
                <div className={style.text}>{profile.location}</div>
                <div className={style.text}>{profile.description}</div>
              </div>}
            <div className={style.date}>Criado em {new Date(profile.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric'})}</div>
          </div>

        </div>
        <div className={style.buttonsContainer}>
          <Button className={style.button} variant="outlined" onClick={()=> this.goToprofile(profile)}>{isMediumScreen ? 'ver perfil completo' : 'ver perfil'}</Button>
          <Button
            onClick={() => this.enableProfile(profile)}
            disabled={loading}
            className={classNames(
              style.button,
              {
                [style.greenButton]: !profile.active,
                [style.redButton]: profile.active,
              }
            )}
            variant="outlined"
          >
            {loading && profile._id === selectedProfile._id ? <CircularProgress size={20} style={{color: !profile.active ? '#1cd149' : 'red'}} /> : buttonText}
          </Button>
        </div>

      </div>)
  }

  render () {
    const { profiles, errorMessage } = this.state
    return(
      <div>
        <Header searchBar={false} />
        <main className={style.main}>
          { !errorMessage ?
            <div className={style.container}>
              {profiles.map(p => (
                this.renderItem(p)
              ))}
            </div> :
            <div>{errorMessage}</div>
          }
        </main>

      </div>)
  }
}

AdminHome.propTypes = {
  isMediumScreen: PropTypes.bool.isRequired,
  history: historyPropType.isRequired
}

export default withMatchMedia()(AdminHome)
