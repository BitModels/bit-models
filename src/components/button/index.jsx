import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

import './style.scss'

const ContainedButton = ({ text, onClick, ...rest }) => (
  <Button
    variant="contained"
    color="secondary"
    className="containedButton"
    onClick={onClick}
    {...rest}
  >
    {text}
  </Button>
)

ContainedButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ContainedButton
