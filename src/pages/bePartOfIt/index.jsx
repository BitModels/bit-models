import React from 'react'
import TextField from '@material-ui/core/TextField'

import style from './style.module.scss'
import Header from '../../components/header'
import NavBar from '../../components/navBar'

const BePartOfIt = () => (
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
    <div className={style.contentContainer}>
      <main>
        <h1 className={style.title}>
      Faça parte
        </h1>
        <p className={style.description}>Quer ver o seu perfil publicado no BitUs? Conte-nos sobre você no formulário abaixo!</p>
        <form noValidate autoComplete="off" className={style.formContainer}>
          <TextField
            id="name"
            label="Nome"
          />
          <TextField
            id="location"
            label="Localização"
          />
          <TextField
            id="location"
            label="Educação"
            placeholder="ex.: Faculdade, pós-graduacão, cursos, etc"
          />
          <TextField
            id="about"
            label="Sobre"
            multiline
            rows={5}
            variant="outlined"
          />
          <TextField
            id="works"
            label="Trabalhos"
            multiline
            rows={5}
            variant="outlined"
          />
          <TextField
            id="social-networks"
            label="Como acompanhar sua história?"
            placeholder="ex.: LinkedIn, Instagram, Github, etc"
            multiline
            rows={3}
            variant="outlined"
          />
        </form>
      </main>
    </div>
  </div>
)

export default BePartOfIt
