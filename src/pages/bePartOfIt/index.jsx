import React from "react"
import axios from 'axios'
import PropTypes from "prop-types"
import TextField from "@material-ui/core/TextField"
import { withStyles } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'

import style from "./style.module.scss"
import Header from "../../components/header"
import NavBar from "../../components/navBar"

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    marginTop: 10
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    width: 200
  },
})

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

const getStyles = (name, that) =>
  ({
    fontWeight:
      that.state.selectedAreas.indexOf(name) === -1
        ? that.props.theme.typography.fontWeightRegular
        : that.props.theme.typography.fontWeightMedium
  })


class BePartOfIt extends React.Component {
  state = {
    selectedAreas: [],
    areas: []
  };

  async componentDidMount() {
    let { data: areas } = await axios({
      method: 'get',
      url: '/areas',
    })
    // eslint-disable-next-line no-nested-ternary
    areas = areas.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
    this.setState({ areas })
  }

  handleChange = event => {
    this.setState({ selectedAreas: event.target.value })
  };

  handleChangeMultiple = event => {
    const { options } = event.target
    const value = []
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }
    this.setState({
      selectedAreas: value
    })
  };

  render() {
    const { classes } = this.props
    const { areas } = this.state

    return (
      <div className={style.container}>
        <Header />
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
        <div className={style.center}>
          <div className={style.contentContainer}>
            <main>
              <h1 className={style.title}>Faça parte</h1>
              <p>
              Quer ver o seu perfil publicado no BitUs? Conte-nos sobre você no
              formulário abaixo!
              </p>
              <form noValidate autoComplete="off" className={style.formContainer}>
                <TextField id="name" label="Nome" className={style.input} />
                <TextField
                  id="location"
                  label="Localização"
                  className={style.input}
                />
                <TextField
                  id="location"
                  label="Educação"
                  placeholder="ex.: Faculdade, pós-graduacão, cursos, etc"
                  className={style.input}
                />
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="select-multiple-chip">Áreas</InputLabel>
                  <Select
                    multiple
                    value={this.state.selectedAreas}
                    onChange={this.handleChange}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={selected => (
                      <div className={classes.chips}>
                        {selected.map(value => (
                          <Chip key={value} label={value} className={classes.chip} />
                        ))}
                      </div>
                    )}
                    MenuProps={MenuProps}
                  >
                    {areas.map(area => (
                      <MenuItem key={area._id} value={area.name} style={getStyles(area.name, this)}>
                        {area.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  id="about"
                  label="Sobre"
                  multiline
                  rows={5}
                  variant="outlined"
                  className={style.textarea}
                />
                <TextField
                  id="works"
                  label="Trabalhos"
                  multiline
                  rows={5}
                  variant="outlined"
                  className={style.textarea}
                />
                <TextField
                  id="social-networks"
                  label="Como acompanhar sua história?"
                  placeholder="ex.: LinkedIn, Instagram, Github, etc"
                  multiline
                  rows={5}
                  variant="outlined"
                  className={style.textarea}
                />
                <div className={style.buttonContainer}>
                  <Button variant="contained" color="primary" className={classes.button}>
                    Enviar
                  </Button>
                </div>
              </form>
            </main>
          </div>
        </div>

      </div>
    )
  }
}

BePartOfIt.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(BePartOfIt)
