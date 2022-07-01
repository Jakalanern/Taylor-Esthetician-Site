// import React, { useState, useEffect } from 'react'

// const Collapse = ({ content, title, startExpanded, id }) => {
//   const [thisIsExpanded, setThisIsExpanded] = useState(false)
//   const [dropdownStyles, setDropdownStyles] = useState({
//     maxHeight: 1,
//     fontSize: 0,
//   })
//   const [headStyles, setHeadStyles] = useState({
//     background: 'rgba(0, 0, 0, 0.264)',
//   })
//   const [plusStyles, setPlusStyles] = useState({ transform: 'scale(1)' })
//   const dropdown = () => {
//     if (thisIsExpanded) {
//       expand()
//     } else {
//       collapse()
//     }
//   }

//   const expand = () => {
//     setDropdownStyles({ maxHeight: 'initial', fontSize: '1em' })
//     setPlusStyles({ transform: 'scale(1.25)' })
//     setHeadStyles({ background: 'white', color: 'black' })
//   }

//   const collapse = () => {
//     setDropdownStyles({ maxHeight: 0, fontSize: 0, transition: 'all 0s' })
//     setPlusStyles({ transform: 'scale(1)' })
//     setHeadStyles({ background: 'rgba(0, 0, 0, 0.264)', color: 'white' })
//   }

//   useEffect(() => {
//     dropdown()
//   }, [thisIsExpanded])

//   useEffect(() => {
//     if (startExpanded) {
//       setThisIsExpanded(true)
//     }
//   }, [])

//   return (
//     <div className='collapse' key={id}>
//       <div
//         className='facials-dropdown-head'
//         id={id}
//         style={headStyles}
//         onClick={() => {
//           setThisIsExpanded(!thisIsExpanded)
//         }}>
//         <span>{title}</span>
//         <span className='plus' style={plusStyles}>
//           +
//         </span>
//       </div>
//       <div className='dropdown-content' style={dropdownStyles}>
//         {content}
//       </div>
//     </div>
//   )
// }

// export default Collapse
