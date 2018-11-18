import React from 'react'

import style from './style.module.scss'
import logoBitGirls from '../../resources/logo-bitGirls.png'
import logoGitHub from '../../resources/gitHub_logo.png'
import Header from '../../components/header'
import NavBar from '../../components/navBar'

const About = () => (
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
    <div className={style.aboutContainer}>

      <article className={style.article}>
        <h1>Sobre</h1>
        <p className={style.p}>
        o BitUs é uma plataforma de divulgação de mulheres que atuam em áreas da Computação. O projeto está sendo desenvolvido pela graduanda Fernanda Duarte, é orientado pela professora Mirella M. Moro e faz parte da disciplina Monografia em Sistemas de Informação ofertada pelo Departamento de Ciência da Computação da UFMG.
        </p>
        <p className={style.p}>
        O BitUs tem como objetivo atrair garotas do ensino médio para a Computação mostrando a elas que existem diversas formas de atuação na área e que mulheres fazem parte de todas elas, inspirando as garotas e auxiliando-as a enxergarem suas semelhantes na Computação.
        </p>
        <p className={style.p}>
          O Projeto BitUs espera ser acessível para todos. Caso você identifique algum problema de acessibilidade envie um email para projetobitus@gmail.com informando-o e nós faremos o possível para corrigi-lo.
        </p>
        <p className={style.p}>Caso queira colaborar com o projeto de alguma forma mande um email para nós também. O projeto está disponível no GitHub, você pode colaborar por lá também.</p>
      </article>
      <aside className={style.aside}>
        <h2>Visite também</h2>
        <div className={style.linksContainer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.bitgirls.dcc.ufmg.br/"
            aria-label="Site Bit Girls"
            className={style.link}
          >
            <img className={style.logos} src={logoBitGirls} alt="logo Bit Girls" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ADFernanda/bit-us"
            aria-label="Site Bit Girls"
            className={style.link}
          >
            <img className={style.logos} src={logoGitHub} alt="logo Bit Girls" />
          </a>
        </div>
      </aside>
    </div>
  </div>
)

export default About
