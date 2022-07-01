import React from 'react'
import '../styles/booking.css'
import downArrow from '../icons/down-arrow-figma.png'

const Booking = ({ fullpageApi }) => {
  const scrollToAbout = () => {
    fullpageApi.moveTo(4)
  }
  return (
    <div className='booking section' id='booking'>
      <div
        className='about-container'
        onClick={() => {
          scrollToAbout()
        }}>
        <span className='about-btn'>ABOUT ME</span>
        <img src={downArrow} alt='' className='about-arrow' />
      </div>
      <div className='book-now'>
        <h1>BOOK NOW</h1>
        <button>Coming Soon</button>
      </div>
    </div>
  )
}

export default Booking
