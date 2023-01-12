import React from 'react'
import '../assets/css/ProfileImage.css'
import ProfilePicture from '../assets/images/profileImage.jpg'

function ProfileImage() {
  return (
    <div class="profile-image-container">
        <img src={ProfilePicture} alt="Picture of Ronald Harsh." className='profile-image-container__image'/>
    </div>
  )
}

export default ProfileImage