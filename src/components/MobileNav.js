import React, { useState, useEffect, useCallback, useRef } from 'react'
import '../styles/mobilenav.css'
import MobileDropdown from './MobileDropdown'
import Burger from './Burger'
import { StyledMobileNav } from './styles/MobileNav.styled'
import navIcon from '../icons/up-arrow.png'

const MobileNav = ({ width }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  )

  useEffect(() => {
    toggleMobileNav()
  }, [isExpanded])

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const setExpandedFalse = () => {
    setIsExpanded(false)
    toggleButton()
  }

  const toggleMobileNav = () => {
    if (isExpanded === true) {
      document.querySelector('.mobile-nav-dropdown').style.transform =
        'translateX(0%)'
    } else {
      document.querySelector('.mobile-nav-dropdown').style.transform =
        'translateX(100%)'
    }
  }

  const scrollToAbout = () => {
    window.fullpage_api.moveTo(3)
  }

  const scrollToContact = () => {
    window.fullpage_api.moveTo(4)
  }

  const scrollToHome = () => {
    window.fullpage_api.moveTo(1)
  }

  function useOutsideAlerter(ref, isExpanded) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          if (isExpanded) {
            setExpandedFalse()
          }
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref, isExpanded])
  }
  const dropdownRef = useRef(null)
  useOutsideAlerter(dropdownRef, isExpanded)

  return (
    <StyledMobileNav className='mobile-nav'>
      <img
        src={navIcon}
        alt={'up-arrow'}
        className='nav-icon'
        onClick={() => {
          scrollToHome()
        }}></img>
      <MobileDropdown
        scrollToAbout={scrollToAbout}
        scrollToContact={scrollToContact}
        scrollToHome={scrollToHome}
        setExpandedFalse={setExpandedFalse}
        dropdownRef={dropdownRef}
        toggleButton={toggleButton}
        width={width}
      />
      <Burger
        toggleMobileNav={toggleMobileNav}
        toggleExpanded={toggleExpanded}
        isActive={isActive}
        toggleButton={toggleButton}
        dropdownRef={dropdownRef}
      />
    </StyledMobileNav>
  )
}

export default MobileNav
