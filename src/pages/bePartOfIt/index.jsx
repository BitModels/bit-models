import React from "react"
import axios from "axios"
import PropTypes from "prop-types"
import classNames from 'classnames'
import { withStyles } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import MenuItem from "@material-ui/core/MenuItem"
import CircularProgress from '@material-ui/core/CircularProgress'
import FormControl from "@material-ui/core/FormControl"
import Button from "@material-ui/core/Button"
import Chip from "@material-ui/core/Chip"
import {
  ValidatorForm,
  TextValidator,
  SelectValidator
} from "react-material-ui-form-validator"

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
    marginBottom: 50,
    width: 200
  },
  progress: {
    color: 'black'
  }
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

const getStyles = (name, that) => ({
  fontWeight:
    that.state.selectedAreas.indexOf(name) === -1
      ? that.props.theme.typography.fontWeightRegular
      : that.props.theme.typography.fontWeightMedium
})

const ERROR_MESSAGES = {
  REQUIRED: "Este campo é obrigatório.",
  SELECT: "Selecione pelo menos uma área."
}

class BePartOfIt extends React.Component {
  state = {
    selectedAreas: [],
    areas: [],
    name: "",
    description: "",
    location: "",
    education: "",
    about: "",
    projects: "",
    socialNetwork: "",
    loading: false,
    image: '',
    submittedProfile: false,
    error: false,
  };

  async componentDidMount() {
    let { data: areas } = await axios({
      method: "get",
      url: "/areas"
    })
    areas = areas.sort((a, b) =>
      // eslint-disable-next-line no-nested-ternary
      a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    )
    this.setState({ areas })
  }

  handleSelectChange = event => {
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

  handleSubmitForm = async e => {
    e.preventDefault()
    const {
      selectedAreas,
      name,
      description,
      location,
      education,
      about,
      projects,
      socialNetwork,
      image
    } = this.state
    try {
      this.setState({loading: true, submittedProfile: false, error: false})
      await axios({
        method: "post",
        url: "/profile",
        data: {
          areas: selectedAreas,
          name,
          description,
          location,
          education,
          about,
          projects,
          socialNetwork,
          image
        }
      })

      this.setState({
        loading: false,
        selectedAreas: [],
        name: "",
        description: "",
        location: "",
        education: "",
        about: "",
        projects: "",
        socialNetwork: "",
        image: '',
        submittedProfile: true,
        error: false})
    } catch(error) {
      this.setState({
        loading: false,
        submittedProfile: true,
        error: true})
    }
  };

  uploadImage = (widget) => {
    widget.open()
  }

  checkUploadResult = (error, result, widget) => {
    if (!error && result && result.event === "success") {
      this.setState({ image: result.info.secure_url})
      widget.close()
    }
  }

  render() {
    const widget = window.cloudinary.createUploadWidget({
      cloudName: 'dqix2wvqh',
      cropping: true,
      multiple: false,
      croppingAspectRatio: 1,
      maxFileSize: 15000000,
      uploadPreset: 'profile_images'}, (error, result) => {
      this.checkUploadResult(error, result, widget)
    })

    const { classes } = this.props
    const {
      areas,
      name,
      description,
      location,
      education,
      about,
      projects,
      socialNetwork,
      image,
      loading,
      submittedProfile,
      error
    } = this.state

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
                Quer ver o seu perfil publicado no BitModels? Conte-nos sobre você
                no formulário abaixo!
              </p>
              <ValidatorForm
                noValidate
                autoComplete="off"
                className={style.formContainer}
                onSubmit={this.handleSubmitForm}
              >
                <TextValidator
                  id="name"
                  label="Nome"
                  onChange={e => this.setState({ name: e.target.value })}
                  className={style.input}
                  validators={["required"]}
                  errorMessages={[ERROR_MESSAGES.REQUIRED]}
                  value={name}
                  required
                />
                <TextValidator
                  id="description"
                  label="Título"
                  placeholder="Ex.: Desenvolvedora de Software"
                  onChange={e => this.setState({ description: e.target.value })}
                  className={style.input}
                  validators={["required"]}
                  errorMessages={[ERROR_MESSAGES.REQUIRED]}
                  value={description}
                  required
                />
                <TextValidator
                  id="location"
                  label="Localização"
                  onChange={e => this.setState({ location: e.target.value })}
                  className={style.input}
                  validators={["required"]}
                  errorMessages={[ERROR_MESSAGES.REQUIRED]}
                  value={location}
                  required
                />
                <TextValidator
                  id="education"
                  label="Educação"
                  onChange={e => this.setState({ education: e.target.value })}
                  placeholder="ex.: Faculdade, pós-graduacão, cursos, etc"
                  className={style.input}
                  validators={["required"]}
                  errorMessages={[ERROR_MESSAGES.REQUIRED]}
                  value={education}
                  required
                />
                <FormControl className={classes.formControl}>
                  <SelectValidator
                    SelectProps={{
                      multiple: true,
                      MenuProps,
                      renderValue: selected => (
                        <div className={classes.chips}>
                          {selected.map(value => {
                            const selectedArea = areas.find((item) => item._id === value)
                            return(
                              <Chip
                                key={value}
                                label={selectedArea.name}
                                className={classes.chip}
                              />
                            )})}
                        </div>
                      )
                    }}
                    label="Áreas *"
                    value={this.state.selectedAreas}
                    onChange={this.handleSelectChange}
                    input={<Input id="select-multiple-chip" />}
                    validators={["required"]}
                    errorMessages={[ERROR_MESSAGES.SELECT]}
                  >
                    {areas.map(area => (
                      <MenuItem
                        key={area._id}
                        value={area._id}
                        style={getStyles(area.name, this)}
                      >
                        {area.name}
                      </MenuItem>
                    ))}
                  </SelectValidator>
                </FormControl>
                <TextValidator
                  id="about"
                  label="Sobre"
                  onChange={e => this.setState({ about: e.target.value })}
                  placeholder="Fale um pouco da sua história, de onde você é, como se interessou pela sua área de estudo e de atuação e tudo o que for relevante para te conhecer"
                  multiline
                  rows={5}
                  className={style.textarea}
                  validators={["required"]}
                  errorMessages={[ERROR_MESSAGES.REQUIRED]}
                  value={about}
                  required
                />
                <TextValidator
                  id="projects"
                  label="Projetos"
                  onChange={e => this.setState({ projects: e.target.value })}
                  placeholder="Conte sobre seus projetos pessoais, na vida acadêmica e no mercado de trabalho"
                  multiline
                  rows={5}
                  className={style.textarea}
                  validators={["required"]}
                  errorMessages={[ERROR_MESSAGES.REQUIRED]}
                  value={projects}
                  required
                />
                <TextValidator
                  id="social-network"
                  label="Como acompanhar sua história?"
                  onChange={e =>
                    this.setState({ socialNetwork: e.target.value })
                  }
                  placeholder="ex.: LinkedIn, Instagram, Github, etc"
                  multiline
                  rows={5}
                  className={style.textarea}
                  validators={["required"]}
                  errorMessages={[ERROR_MESSAGES.REQUIRED]}
                  value={socialNetwork}
                  required
                />
                <div className={style.imageContainer}>

                  {!image && <Button
                    variant="contained"
                    className={style.uploadImage}
                    id="upload_image"
                    onClick={() => this.uploadImage(widget)}
                  >
                    Adicionar foto
                  </Button>}
                  {image && <img className={style.img} src={image} alt="sua foto de perfil" />}
                </div>
                {submittedProfile && !error && <div className={style.message}>
                  <span>Seu perfil foi enviado com sucesso e em breve estará disponível no BitModels. Obrigada!</span>
                </div>}
                {submittedProfile && error && <div className={classNames(style.message, style.error)}>
                  <span>Um erro inesperado ocorreu. Tente novamente dentro de alguns instantes.</span>
                </div>}
                <div className={style.buttonContainer}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onChange={this.handleForm}
                    type="submit"
                  >
                    {loading? <CircularProgress size={20} style={{color: '#605E63'}} /> : "Enviar"}
                  </Button>
                </div>
              </ValidatorForm>
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
