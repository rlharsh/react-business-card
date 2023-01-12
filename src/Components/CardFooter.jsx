import React from 'react'
import '../assets/css/CardFooter.css'

function CardFooter() {
  return (
    <footer className='card-footer'>
        <a href="#" className='footer-link'><i class="fa-brands fa-square-twitter"></i></a>
        <a href="#" className='footer-link'><i class="fa-brands fa-square-facebook"></i></a>
        <a href="#" className='footer-link'><i class="fa-brands fa-square-instagram"></i></a>
        <a href="#" className='footer-link'><i class="fa-brands fa-square-github"></i></a>
    </footer>
  )
}

export default CardFooter