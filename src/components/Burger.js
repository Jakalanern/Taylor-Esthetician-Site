import React, { useState } from 'react'
import { HamburgerCollapse } from 'react-animated-burgers'

const Burger = ({
  toggleExpanded,
  toggleMobileNav,
  isActive,
  toggleButton,
  dropdownRef,
}) => {
  const [burgerStyles, setBurgerStyles] = useState({
    opacity: '1',
    transition: 'opacity .25s',
    zIndex: '99999',
  })

  return (
    <div
      className='burger'
      ref={dropdownRef}
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
