import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon'

import style from './style.module.scss'

const ProfileButton = ({ profileData, profiles }) => (
  <Link
    to={{
      pathname: `/perfil/${profileData._id}`,
      state: { profiles },
    }}
    aria-label={`ir para perfil de ${profileData.name}`}
    key={profileData.id}
    className={style.itemContainer}
  >
    <div className={style.iconContainer}>
      <Icon className={style.icon}>computer</Icon>
    </div>
    <div className={style.dataContainer}>
      <span className={style.name}>
        {profileData.name}
      </span>
      <span>
        {profileData.description}
      </span>
    </div>
  </Link>
)

ProfileButton.propTypes = {
  profileData: PropTypes.object.isRequired,
  profiles: PropTypes.array.isRequired,
}

export default ProfileButton
