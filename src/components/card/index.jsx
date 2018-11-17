import React from 'react'
import PropTypes from 'prop-types'
import MaterialCard from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import LinesEllipsis from 'react-lines-ellipsis'

import style from './style.module.scss'

const Card = ({
  image, altImage, title, content,
}) => (
  <MaterialCard className={style.card}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt={altImage}
        className={style.media}
        style={{ height: 250 }}
        image={image}
        title={altImage}
      />
      <CardContent classes={{ root: style.content }}>
        <h2 className={style.h2}>
          {title}
        </h2>
        <LinesEllipsis
          className={style.p}
          text={content}
          maxLine="7"
          trimRight
          basedOn="letters"
        />
      </CardContent>
    </CardActionArea>
  </MaterialCard>
)

Card.propTypes = {
  image: PropTypes.string.isRequired,
  altImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Card
