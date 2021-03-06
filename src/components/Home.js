import React, { useEffect } from 'react'
import '../styles/home.css'
import { gsap } from 'gsap'
import { StyledTitle } from './styles/Title.styled'
import ArrowNav from './ArrowNav'

const Home = ({ fullpageApi }) => {
  // GSAP
  useEffect(() => {
    gsap.to('.animate', { opacity: 1, duration: 1 }, '-=1.25')
  })

  const scrollToServices = () => {
    fullpageApi.moveTo(2)
  }

  const mainTitleStyles = {
    position: 'absolute',
    top: '125px',
    right: '0',
    left: '0',
    paddingTop: '10px',
    fontSize: '',
  }

  return (
    <main className='home section' id='home'>
      <div className='home-container animate' style={{ opacity: 0 }}>
        <ArrowNav scroll={scrollToServices} name={'SERVICES'} />
        <StyledTitle margin={'auto 0'} style={mainTitleStyles} id='main-title'>
          ESTHETICS
          <br />
          <h5 style={{ fontWeight: '400' }}>BY TAY</h5>
        </StyledTitle>
      </div>
    </main>
  )
}

export default Home
