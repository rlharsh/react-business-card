import React, { Component } from 'react'

import '../assets/css/CardBody.css'


function CardHeader() {
    return (
        <div className='header-wrapper'>
            <h1 className='header'>Ronald Harsh</h1>
            <CardCta />
            <CardSlug />
        </div>
    )
}


function CardCta() {
  return (
    <h2 className='cta-text'>Frontend Developer</h2>
  )
}


function CardSlug() {
  return (
    <h3 className='slug-text'>ronald.harsh</h3>
  )
}


function CardButtons() {
  return (
    <div className='button-wrapper'>
      <EmailButton />
      <LinkedInButton />
    </div>
  )
}


function EmailButton() {
  return (
    <button className='button button--email'><i class="fa-solid fa-envelope"></i>Email</button>
  )
}


function LinkedInButton() {
  return (
    <button className='button button--linkedin'><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
  )
}


function InformationContainers() {
  return (
    <div className="information-container-wrapper">
      <AboutContainer />
      <InterestContainer />
    </div>
  )
}


function AboutContainer() {
  return (
    <div className="information-container">
      <h1 className='information-header'>About</h1>
      <p className='information-p'>
      I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
      </p>
    </div>
  )
}


function InterestContainer() {
  return (
    <div className="information-container">
      <h1 className='information-header'>Interest</h1>
      <p className='information-p'>
      I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
      </p>
    </div>
  )
}


function CardBody() {

    return (
      <div className='card-body-wrapper'>
        <CardHeader />
        <CardButtons />
        <InformationContainers />
      </div>
    )
}

export default CardBody
