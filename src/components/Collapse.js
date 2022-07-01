import { buildQueries } from '@testing-library/react'
import React, { useState, useEffect } from 'react'
import '../styles/collapse.css'

const Collapse = ({ content, title, startExpanded, data }) => {
  const [thisIsExpanded, setThisIsExpanded] = useState(true)
  const [dropdownStyles, setDropdownStyles] = useState({
    maxHeight: 1,
    fontSize: 0,
  })

  const [titleStyles, setTitleStyles] = useState({})
  const [headStyles, setHeadStyles] = useState({})
  const [plusStyles, setPlusStyles] = useState({
    transform: 'scale(1)',
  })
  const dropdown = () => {
    setThisIsExpanded(!thisIsExpanded)
    if (thisIsExpanded) {
      expand()
    } else {
      collapse()
    }
  }

  const expand = () => {
    setDropdownStyles({ maxHeight: 'initial', fontSize: '1em' })
    setPlusStyles({ transform: 'scale(1.25)' })
    setHeadStyles({ background: 'white', color: 'black' })
    setTitleStyles({ color: 'black' })
  }

  const collapse = () => {
    setDropdownStyles({ maxHeight: 0, fontSize: 0, transition: 'all 0s' })
    setPlusStyles({ transform: 'scale(1)' })
    setHeadStyles({ background: 'rgba(0, 0, 0, 0.264)', color: 'white' })
    setTitleStyles({ color: 'white' })
  }

  return (
    <div className='collapse' key={data.id}>
      <div
        className='facials-dropdown-head'
        id={'facials-head'}
        style={headStyles}
        onClick={() => {
          dropdown()
        }}
        onMouseEnter={() => {
          if (!thisIsExpanded) {
            setTitleStyles({ color: 'black' })
          } else {
            setHeadStyles({ background: 'white' })
            setTitleStyles({ color: 'black' })
            setPlusStyles({ color: 'black' })
          }
        }}
        onMouseLeave={() => {
          if (thisIsExpanded) {
            setHeadStyles({ background: 'rgba(0, 0, 0, 0.264)' })
            setTitleStyles({ color: 'white' })
            setPlusStyles({ color: 'white' })
          }
        }}>
        <span style={titleStyles}>{data.title}</span>
        <span className='plus' style={plusStyles}>
          +
        </span>
      </div>
      <div className='dropdown-content' style={dropdownStyles}>
        <div className='content'>
          {data.contentTitle && (
            <h1 className='content-title'>{data.contentTitle}</h1>
          )}
          {data.goodFor && <h1 className='good-for'>{data.goodFor}</h1>}
          {data.goodForDesc && <p>{data.goodForDesc}</p>}
          {data.benefits && <h1 className='benefits'>{data.benefits}</h1>}
          {data.contentDescOne && <p>{data.contentDescOne}</p>}
          {data.contentDescTwo && <p>{data.contentDescTwo}</p>}
          {data.contentDescThree && <p>{data.contentDescThree}</p>}
          {data.disclaimer && <p className='asterisk'>{data.disclaimer}</p>}
          {data.services &&
            data.services.map((s) => (
              <h1 className='simple-service' key={s}>
                {s}
              </h1>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Collapse
