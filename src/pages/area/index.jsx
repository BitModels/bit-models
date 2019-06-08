import React from "react"
import axios from "axios"
import ReactHtmlParser from "react-html-parser"
import CircularProgress from '@material-ui/core/CircularProgress'
import { Link } from "react-router-dom"
import classNames from 'classnames'
import { matchPropType, locationPropType } from "../../propTypes/router"
import Header from "../../components/header"
import NavBar from "../../components/navBar"
import ProfileButton from "../../components/profileButton"
import style from "./style.module.scss"

class Area extends React.Component {
  state = {
    id: null,
    areas: [],
    areaData: {},
    isLoading: true,
    previous: '',
    next: '',
    showPreviousButton: false,
    showNextButton: false
  };

  async componentDidMount() {
    await this.getArea()
  }

  async componentDidUpdate() {
    const { id } = this.state

    if(id !== this.props.match.params.id) {
      await this.getArea()
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ previousLoading: false, nextLoading: false})
    }
  }

  getArea = async () => {
    const { data: areaData } = await axios({
      method: "get",
      url: `/areas/${this.props.match.params.id}`
    })
    // eslint-disable-next-line react/no-did-update-set-state
    this.setState({
      id: this.props.match.params.id,
      areaData,
      isLoading: false
    })
    if (this.props.location.state && this.props.location.state.areas) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        areas: this.props.location.state.areas
      })
      this.selectArea()
    }
  }

  selectArea = async () => {
    const { id } = this.props.match.params
    const { areas } = this.state
    const index = areas.findIndex(a => (a._id === id))

    if (index < 0) {
      this.setState({ showPreviousButton: false, showNextButton: false })
    } else {
      let next
      let previous

      if (index > 0) {
        previous = `/area/${areas[index - 1]._id}`
      }

      if (index < (areas.length-1)) {
        next = `/area/${areas[index + 1]._id}`
      }

      if (index === (areas.length-1)) {
        this.setState({ showPreviousButton: true, showNextButton: false, previous, next: '' })
      } else if (index === 0) {
        this.setState({ showPreviousButton: false, showNextButton: true, next, previous: '' })
      } else {
        this.setState({ showPreviousButton: true, showNextButton: true, previous, next })
      }
    }
  };

  render() {
    const {
      areaData,
      isLoading,
      previous,
      next,
      showPreviousButton,
      showNextButton,
      areas,
      previousLoading,
      nextLoading
    } = this.state
    return (
      <div className={style.container}>
        <Header searchBar={false} />
        <NavBar
          buttons={[
            {
              label: "INÍCIO",
              to: "/"
            },
            {
              label: "FAÇA PARTE",
              to: "/facaParte"
            },
            {
              label: "SOBRE",
              to: "/sobre"
            }
          ]}
        />
        {!isLoading && (
          <div className={style.areaContainer}>
            <article className={style.article}>
              <div className={style.articleContent}>
                <h1 className={style.h1}>{areaData.name}</h1>
                <img
                  className={style.img}
                  src={areaData.image}
                  alt={areaData.imageDescription}
                />
                <div className={style.p}>
                  {ReactHtmlParser(areaData.description)}
                </div>
                <div className={classNames(style.buttonsContainer, {
                  [style.flexEnd]: !showPreviousButton,
                  [style.spaceBetween]: showPreviousButton
                })}>
                  {showPreviousButton && (
                    <li className={style.li}>
                      <Link
                        to={{
                          pathname: previous,
                          state: { areas }
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
                          state: { areas }
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
              </div>
            </article>
            <aside className={style.aside}>
              {areaData.profiles.length > 0 && (
                <div>
                  <h2 className={style.h2}>Conheça mulheres da área</h2>
                  {this.state.areaData.profiles.map(p => (
                    <ProfileButton profileData={p} key={p._id} />
                  ))}
                </div>
              )}
            </aside>
          </div>
        )}
      </div>
    )
  }
}

Area.propTypes = {
  location: locationPropType.isRequired,
  match: matchPropType.isRequired
}

export default Area