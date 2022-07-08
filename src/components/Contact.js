import React from 'react'
import img from '../images/CONTACT FINAL.jpg'
import { StyledButton } from './styles/Button.styled'
import { StyledSection } from './styles/Section.styled'
import { StyledTitle } from './styles/Title.styled'
import { StyledParagraph } from './styles/Paragraph.styled'

const Contact = () => {
  return (
    <StyledSection
      className='section'
      img={img}
      overlayColor={'rgba(0,0,0, .5)'}>
      <StyledTitle>CONTACT</StyledTitle>
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        fugit neque rerum.
      </StyledParagraph>
      <br />
      <StyledParagraph>
        Natus quod deserunt ratione ex asperiores dignissimos ab facere? Esse
        assumenda voluptatem, iure, facilis vero at asperiores expedita.
      </StyledParagraph>
      <br />
      <StyledParagraph>
        Eveniet, placeat in quasi et soluta eos ipsa modi.
      </StyledParagraph>
      <StyledButton
        onClick={() => {
          window.location.href = 'mailto:contact.estheticsbytay@gmail.com'
        }}>
        Email me
      </StyledButton>
    </StyledSection>
  )
}

export default Contact
