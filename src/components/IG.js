import React from 'react'
import ig from '../icons/ig.png'

const IG = ({ width }) => {
  return (
    <img
      src={ig}
      alt=''
      styles={{ zIndex: '9999' }}
      className='ig'
      onClick={() => {
        if (width > 875) {
          window.open('https://www.instagram.com/estheticsbytay_')
        } else {
          window.location.href = 'https://www.instagram.com/estheticsbytay_'
        }
      }}
    />
  )
}

export default IG
