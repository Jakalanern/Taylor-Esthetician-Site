import React, { useRef, useEffect } from 'react'
import { StyledMobileDropdown } from './styles/MobileDropdown.styles'

const MobileDropdown = ({
  scrollToContact,
  scrollToHome,
  scrollToAbout,
  setExpandedFalse,
  width,
  toggleButton,
  scrollToServices,
}) => {
  return (
    <StyledMobileDropdown className='mobile-nav-dropdown'>
      <ul className='mobile-nav-list'>
        <li
          className='mobile-nav-link mobile-home-link'
          onClick={() => {
            setExpandedFalse()
            toggleButton()
            scrollToHome()
          }}>
          HOME
        </li>
        <li
          className='mobile-nav-link mobile-services-link'
          onClick={() => {
            setExpandedFalse()
            toggleButton()
            scrollToServices()
          }}>
          SERVICES
        </li>
        <li
          className='mobile-nav-link mobile-about-link'
          onClick={() => {
            setExpandedFalse()
            toggleButton()
            scrollToAbout()
          }}>
          ABOUT ME
        </li>
        <li
          className='mobile-nav-link mobile-contact-link'
          onClick={() => {
            setExpandedFalse()
            toggleButton()
            scrollToContact()
          }}>
          CONTACT
        </li>
        <li
          className='mobile-nav-link mobile-book-link'
          onClick={() => {
            // scrollToHome()
            setExpandedFalse()
            toggleButton()
            if (width > 875) {
              window.open('https://www.vagaro.com/skinbymadisonlyla/staff')
            } else {
              window.location.href =
                'https://www.vagaro.com/skinbymadisonlyla/staff'
            }
          }}>
          BOOK
        </li>
      </ul>
    </StyledMobileDropdown>
  )
}

export default MobileDropdown
