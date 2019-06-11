import React from 'react'
import axios from "axios"
import PropTypes from "prop-types"
import classNames from 'classnames'
import Button from "@material-ui/core/Button"
import LinesEllipsis from 'react-lines-ellipsis'
import { historyPropType } from "../../../propTypes/router"
import { withMatchMedia } from '../../../HOCs'
import Header from '../../../components/header'
import style from './style.module.scss'
import Bibi1 from '../../../resources/bibiImages/bibi1.png'

class AdminHome extends React.Component {
  state = {
    errorMessage: '',
    profiles: []
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
      this.setState({ profiles })
    } catch (error) {
      const { history } = this.props
      if(error && error.response && error.response.status === 401) {
        history.push('/admin')
      } else {
        this.setState({ errorMessage: 'Um erro inexperado ocorreu.'})
      }
    }
  }

  renderItem = (profile) => {
    const { isMediumScreen } = this.props

    return (
      <div key={profile._id} className={style.profileContainer}>
        <div className={style.dataContainer}>
          <img className={style.img} src={profile.image ? profile.image : Bibi1} alt={`imagem de perfil da ${profile.name}`} />
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
            <div className={style.date}>Criado em {new Date(profile.registrationDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric'})}</div>
          </div>

        </div>
        <div className={style.buttonsContainer}>
          <Button className={style.button} variant="outlined" >{isMediumScreen ? 'ver perfil completo' : 'ver perfil'}</Button>
          <Button
            className={classNames(
              style.button,
              {
                [style.greenButton]: !profile.active,
                [style.redButton]: profile.active,
              }
            )}
            variant="outlined"
          > {profile.active ? 'desativar' : 'ativar'}</Button>
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
