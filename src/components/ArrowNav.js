import React from 'react'
import downArrow from '../icons/down-arrow-figma.png'
import { StyledArrowNavContainer } from './styles/ArrowNav/ArrowNav__Container.styled'
import { StyledArrowNavArrow } from './styles/ArrowNav/ArrowNav__Arrow.styled'
import { StyledArrowNavTitle } from './styles/ArrowNav/ArrowNav__Title.styled'

const ArrowNav = ({ scroll, name }) => {
  return (
    <StyledArrowNavContainer
      onClick={() => {
        scroll()
      }}>
      <StyledArrowNavTitle>{name}</StyledArrowNavTitle>
      <StyledArrowNavArrow src={downArrow} alt='' />
    </StyledArrowNavContainer>
  )
}

export default ArrowNav
