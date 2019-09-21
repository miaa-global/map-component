import React from 'react'
import src from '../../assets/MIAAPopayan.png'
import './navbar.style.scss'

const blogUrl = 'https://medium.com/@civitalab'
const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdozLpf03BHKQyNbG5XDrUrMwP3tpJmzShujnSNOt7hVVSmXg/viewform'
const aboutUs = 'https://miaapopayan.home.blog/quienes-somos/'

export function Navbar () {
  return (
    <nav className="top-navbar">
      <a href="#">
        <img src={src} />
      </a>
      <div className="main-links">
        <a href={aboutUs} target="_blank">
          <span>Acerca del proyecto</span>
        </a>
        <a href={blogUrl} target="_blank">
          <span>Blog</span>
        </a>
        <a href={formUrl} target="_blank">
          <span>Formulario</span>
        </a>
      </div>
    </nav>
  )
}
