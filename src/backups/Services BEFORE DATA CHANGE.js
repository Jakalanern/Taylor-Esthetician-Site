// import React, { useEffect } from 'react'
// import '../styles/services.css'
// import downArrow from '../icons/down-arrow-figma.png'
// import Collapse from './Collapse BEFORE DATA CHANGE'
// import data from './data BEFORE DATA CHANGE'
// import { gsap } from 'gsap'

// const Services = ({ fullpageApi }) => {
//   useEffect(() => {
//     const services = gsap.timeline({
//       trigger: '.sadw',
//     })
//     services.to('.s-animate', { opacity: 1, duration: 0.5 }, '-=1.5')
//   })

//   const scrollToBooking = () => {
//     fullpageApi.moveTo(3)
//   }

//   return (
//     <div className='services section s-animate' id='services'>
//       <div
//         className='booking-container'
//         onClick={() => {
//           scrollToBooking()
//         }}>
//         <span className='booking-btn'>ABOUT ME</span>
//         <img src={downArrow} alt='' className='booking-arrow' />
//       </div>
//       <div className='services-content'>
//         <h1 className='services-title'>Services</h1>
//         <div className='services-scroll'>
//           <div className='collapse-container'>
//             <div className='dropdowns'>
//               <h1 className='dropdown-title'>facials</h1>
//               <Collapse title={'skin consultation'} content={data[0]} id={1} />
//               <Collapse title={'signature facial'} content={data[1]} id={2} />
//               <Collapse title={'dmk enzyme'} content={data[2]} id={3} />
//               <Collapse title={'custom peel'} content={data[3]} id={'four'} />
//             </div>
//             <div className='beauty-dropdowns'></div>
//             <div className='dropdowns'>
//               <h1 className='dropdown-title'>beauty</h1>
//               <Collapse title={'waxing'} content={data[4]} id={5} />
//               <Collapse title={'brows'} content={data[5]} id={6} />
//               <Collapse title={'lashes'} content={data[6]} id={7} />
//             </div>
//             <div className='dropdowns'>
//               <h1 className='dropdown-title'>add-ons</h1>
//               <Collapse title={'facial massage'} content={data[7]} id={8} />
//               <Collapse title={'LED light therapy'} content={data[8]} id={9} />
//             </div>
//           </div>
//         </div>
//         <button>BOOK</button>
//       </div>
//     </div>
//   )
// }

// export default Services
