import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import style from './style.module.scss'

export default () => (
  <Card className={style.card}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        className={style.media}
        style={{ height: 250 }}
        image="https://www.yu.edu/sites/default/files/ThinkstockPhotos-658148844.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <h2 className={style.h2}>
            Lizard
        </h2>
        <p className={style.p}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
        </p>
      </CardContent>
    </CardActionArea>
  </Card>
)
