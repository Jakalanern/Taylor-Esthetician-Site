import React, { useState, useCallback, useEffect } from 'react'
import { HamburgerCollapse } from 'react-animated-burgers'

const Burger = ({ width }) => {
  const [isActive, setIsActive] = useState(false)
  const [burgerStyles, setBurgerStyles] = useState({
    opacity: '1',
    transition: 'opacity .25s',
    zIndex: '99999',
  })
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    toggleMobileNav()
  }, [isExpanded])

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
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

  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  )

  return (
    <div
      className='burger'
      style={burgerStyles}
      onClick={() => {
        toggleExpanded()
      }}
      onMouseEnter={() => {
        setBurgerStyles({ opacity: '.75', transition: 'opacity .25s' })
      }}
      onMouseLeave={() => {
        setBurgerStyles({ opacity: '1', transition: 'opacity .25s' })
      }}>
      <HamburgerCollapse
        buttonColor='transparent'
        barColor='white'
        buttonStyle={{}}
        {...{ isActive, toggleButton, toggleMobileNav }}
      />
    </div>
  )
}

export default Burger
