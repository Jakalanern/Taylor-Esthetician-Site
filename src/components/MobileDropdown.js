import React, { useRef, useEffect } from 'react'
import { StyledMobileDropdown } from './styles/MobileDropdown.styles'

const MobileDropdown = ({
  scrollToContact,
  scrollToHome,
  scrollToAbout,
  setExpandedFalse,
  width,
  dropdownRef,
  toggleButton,
}) => {
  return (
    <StyledMobileDropdown className='mobile-nav-dropdown' ref={dropdownRef}>
      <ul className='mobile-nav-list'>
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
        <li
          className='mobile-nav-link mobile-about-link'
          onClick={() => {
            scrollToAbout()
            setExpandedFalse()
            toggleButton()
          }}>
          ABOUT ME
        </li>
        <li
          className='mobile-nav-link mobile-contact-link'
          onClick={() => {
            scrollToContact()
            setExpandedFalse()
            toggleButton()
          }}>
          CONTACT
        </li>
      </ul>
    </StyledMobileDropdown>
  )
}

export default MobileDropdown
