import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { selectImage } from '../../utils'
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
    <img className={style.img} src={profileData.image ? profileData.image : selectImage(new Date(profileData.updatedAt))} alt={`imagem de perfil da ${profileData.name}`} />
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
