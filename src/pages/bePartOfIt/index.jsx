import React from 'react'

import style from './style.module.scss'
import Header from '../../components/header'

const BePartOfIt = () => (
  <div className={style.container}>
    <Header />
    <div className={style.contentContainer}>
      <p className={style.p}>
      Em breve você poderá inserir seu perfil no BitUs. Aguarde essa nova funcionalidade!
      </p>
    </div>
  </div>
)

export default BePartOfIt
