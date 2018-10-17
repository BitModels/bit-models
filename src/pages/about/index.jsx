import React from 'react'

import style from './style.module.scss'
import logoBitGirls from '../../resources/logo-bitGirls.png'
import logoGitHub from '../../resources/gitHub_logo.jpeg'
import Header from '../../components/header'

const About = () => (
  <div className={style.container}>
    <Header />
    <div className={style.aboutContainer}>

      <article className={style.article}>
        <h1>Sobre</h1>
        <p className={style.p}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies orci lacus, at venenatis risus commodo id. Suspendisse semper convallis imperdiet. Nunc ornare orci et nisl porta accumsan. Vestibulum placerat ac felis eu tempus. Duis nec tellus et tortor bibendum congue. Integer aliquet neque velit, id lacinia augue cursus at. Mauris eget elit risus. Donec et scelerisque velit, vel tempus sem. Integer pulvinar risus risus, et placerat nisi ultrices at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum venenatis volutpat mollis. Fusce feugiat eu tortor at sodales.
        </p>
        <p className={style.p}>
      Aliquam erat volutpat. In nec pretium nunc. Integer eget dolor id velit sollicitudin accumsan molestie sed eros. Nulla accumsan, sem non vestibulum tristique, arcu augue dignissim arcu, vel bibendum nisi nulla vel ipsum. Quisque eget velit condimentum, imperdiet quam quis, mattis mi. Suspendisse efficitur sapien quis mi hendrerit, et finibus ex eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In et viverra tortor, vitae sagittis neque. Integer urna justo, commodo quis sapien ut, molestie pulvinar mi. Quisque faucibus, ipsum quis viverra accumsan, diam elit pellentesque sem, a tempor nisl risus pellentesque neque. Sed dictum, est eu mollis rhoncus, tellus odio venenatis magna, nec varius est est ac dolor. Aliquam hendrerit est luctus odio dictum fermentum. Quisque placerat est non lobortis fringilla.
        </p>
        <p className={style.p}>
      Sed in porttitor massa. Proin pellentesque pretium lorem ut tempor. Sed ut urna sed justo scelerisque faucibus. Donec in tortor sed dolor egestas gravida. Sed nec dui vel nisl fermentum sodales. Nullam mollis vitae nibh a sagittis. Mauris varius imperdiet tortor dictum faucibus. Nunc nec erat fermentum, convallis metus a, accumsan ex. Nulla imperdiet mi in tempus feugiat.
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
