import React from 'react'

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
    <main className={style.contentContainer}>
      <p className={style.p}>
      Em breve você poderá inserir seu perfil no BitUs. Aguarde essa nova funcionalidade!
      </p>
    </main>
  </div>
)

export default BePartOfIt
