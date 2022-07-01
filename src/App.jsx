import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'
import ReactFullpage from '@fullpage/react-fullpage'
import MobileNav from './components/MobileNav'
import IG from './components/IG'
import ScrollReveal from 'scrollreveal'
import gsap from 'gsap'

const App = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [width])

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }

  return (
    <>
      {width > 875 ? <Nav width={width} /> : <MobileNav width={width} />}
      <IG width={width} />
      <ReactFullpage
        //fullpage options
        licenseKey={'VKAT7-9NZT7-JL6J9-FJ8HI-IOTRK'}
        scrollingSpeed={400} /* Options here */
        navigation={true}
        showActiveTooltip={true} //
        normalScrollElements={'.services-scroll'}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <ReactFullpage.Wrapper>
                <Home fullpageApi={fullpageApi} />
                <Services fullpageApi={fullpageApi} width={width} />
                <About fullpageApi={fullpageApi} />
                <Contact fullpageApi={fullpageApi} />
              </ReactFullpage.Wrapper>
            </>
          )
        }}
      />
    </>
  )
}

export default App
