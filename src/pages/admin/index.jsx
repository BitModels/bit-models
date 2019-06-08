import React from 'react'
import axios from "axios"
import {
  ValidatorForm,
  TextValidator
} from "react-material-ui-form-validator"
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from "@material-ui/core/Button"
import { historyPropType } from "../../propTypes/router"
import style from './style.module.scss'
import Header from '../../components/header'

class Admin extends React.Component {
  state = {
    loading: false,
    login: '',
    password: '',
    errorMessage: ''
  };

  handleSubmitForm = async () => {
    const { login, password } = this.state
    const { history } = this.props
    try {
      this.setState({loading: true})
      const { data: token } = await axios({
        method: "post",
        url: "/adminLogin",
        data: {
          login, password
        }
      })

      localStorage.setItem('token', token.token)

      this.setState({loading: false})
      history.push('/admin-home')
    } catch(error) {
      if(error.response.status === 401) {
        this.setState({loading: false, errorMessage: 'Usuário ou senha inválido.'})
      } else {
        this.setState({loading: false, errorMessage: 'Um erro inexperado ocorreu.'})
      }
    }
  };


  render() {
    const { login, password, loading, errorMessage } = this.state
    return (
      <div className={style.container}>
        <Header />
        <main className={style.main}>
          <ValidatorForm
            noValidate
            autoComplete="off"
            className={style.formContainer}
            onSubmit={this.handleSubmitForm}
          >
            <TextValidator
              id="login"
              label="login"
              onChange={e => this.setState({ login: e.target.value })}
              className={style.input}
              validators={["required"]}
              errorMessages="Este campo é obrigatório."
              value={login}
              required
            />
            <TextValidator
              id="password"
              label="senha"
              onChange={e => this.setState({ password: e.target.value })}
              className={style.input}
              validators={["required"]}
              errorMessages="Este campo é obrigatório."
              value={password}
              required
              type= 'password'
            />

            <div className={style.buttonContainer}>
              <Button
                className={style.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                {loading? <CircularProgress size={20} style={{color: '#FFF'}} /> : "Entrar"}
              </Button>
              {errorMessage && <div className={ style.errorMessage}>{errorMessage}</div>}
            </div>
          </ValidatorForm>
        </main>
      </div>
    )
  }
}

Admin.propTypes = {
  history: historyPropType.isRequired
}

export default Admin
