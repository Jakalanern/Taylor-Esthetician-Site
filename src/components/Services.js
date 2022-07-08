import React, { useEffect, useRef } from 'react'
import '../styles/services.css'
import { gsap } from 'gsap'
import { StyledTitle } from './styles/Title.styled'
import { StyledSection } from './styles/Section.styled'
import ArrowNav from './ArrowNav'
import Collapse from './Collapse'
import data from '../data/data-new.js'
import img from '../images/SERVICES FINAL.jpg'

const Services = ({ fullpageApi, width }) => {
  const ref = useRef(null)
  useEffect(() => {
    const services = gsap.timeline({
      trigger: '.collapse-container',
    })
    services.to('.s-animate', { opacity: 1, duration: 10 }, '')
  })

  const scrollToServices = () => {
    fullpageApi.moveTo(3)
  }

  const desktopTitleStyles = {
    paddingTop: '96px',
  }

  const mobileTitleStyles = {
    paddingTop: '64px',
  }

  return (
    <StyledSection
      className='section s-animate services'
      ref={ref}
      style={{ padding: '1em 0em' }}
      img={img}
      overlayColor={'rgba(0,0,0,.6)'}>
      <ArrowNav scroll={scrollToServices} name={'ABOUT'} />
      <div className='services-content'>
        <StyledTitle
          style={width > 875 ? desktopTitleStyles : mobileTitleStyles}>
          SERVICES
        </StyledTitle>
        <div className='services-scroll'>
          <div className='collapse-container'>
            <div className='dropdowns'>
              <h1 className='dropdown-title'>facials</h1>
              {data.map((data) =>
                data.category === 'facials' ? (
                  <Collapse data={data} key={data.id} />
                ) : (
                  console.log()
                )
              )}
            </div>
            <div className='dropdowns'>
              <h1 className='dropdown-title'>beauty</h1>
              {data.map((data) =>
                data.category === 'beauty' ? (
                  <Collapse data={data} key={data.id} />
                ) : (
                  console.log()
                )
              )}
            </div>
            <div className='dropdowns'>
              <h1 className='dropdown-title'>add-ons</h1>
              {data.map((data) =>
                data.category === 'addons' ? (
                  <Collapse data={data} key={data.id} />
                ) : (
                  console.log()
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

export default Services
