import React from 'react'
import '../styles/nav.css'
import navIcon from '../icons/up-arrow.png'
import { StyledNav } from './styles/Nav.styled'

const Nav = ({ width }) => {
  const scrollToAbout = () => {
    window.fullpage_api.moveTo(3)
  }

  const scrollToContact = () => {
    window.fullpage_api.moveTo(4)
  }

  const scrollToHome = () => {
    window.fullpage_api.moveTo(1)
  }

  return (
    <StyledNav className='nav nav-animate ' id='nav'>
      <img
        src={navIcon}
        alt={'up-arrow'}
        className='nav-icon'
        onClick={() => {
          scrollToHome()
        }}></img>

      <ul className='nav-list'>
        <li
          className='nav-link about-link'
          onClick={() => {
            scrollToAbout()
          }}>
          ABOUT
        </li>
        <li
          className='nav-link book-link'
          onClick={() => {
            scrollToHome()
            if (width > 875) {
              window.open('https://www.vagaro.com/skinbymadisonlyla/staff')
            } else {
              window.location.href =
                'https://www.vagaro.com/skinbymadisonlyla/staff'
            }
          }}>
          BOOK
        </li>
        <li
          className='nav-link contact-link'
          onClick={() => {
            scrollToContact()
          }}>
          CONTACT
        </li>
      </ul>
    </StyledNav>
  )
}

export default Nav
