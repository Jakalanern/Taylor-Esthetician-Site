import React from 'react'
import '../styles/scrolltotop.css'

const ScrollToTop = () => {
  return (
    <div
      className='scroll-content'
      onClick={() => {
        window.fullpage_api.moveTo(1)
      }}>
      <div className='scroll-to-top'>TO TOP</div>
    </div>
  )
}

export default ScrollToTop
