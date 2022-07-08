import React from 'react'
import ArrowNav from './ArrowNav'
import img from '../images/ABOUT FINAL.jpg'
import { StyledTitle } from './styles/Title.styled'
import { StyledSection } from './styles/Section.styled'
import { StyledParagraph } from './styles/Paragraph.styled'

const About = ({ fullpageApi }) => {
  const scrollToContact = () => {
    fullpageApi.moveTo(4)
  }
  return (
    <StyledSection
      className='section'
      img={img}
      overlayColor={'rgba(0,0,0,.6)'}>
      <ArrowNav scroll={scrollToContact} name={'CONTACT'} />
      <StyledTitle>ABOUT ME</StyledTitle>
      <StyledParagraph>
        Dual licensed Esthetican & Massage Therapist focusing on results driven
        treatments, relaxation & natural beauty enhancing services.
      </StyledParagraph>
      <br />
      <StyledParagraph>
        My skin journey started many years ago because I struggled with inflamed
        cystic acne. I struggled to feel comfortable in my own skin & I didn't
        know how to change it, no matter what I tried. Through that journey I
        found my esthetician, she helped heal my skin & explain what was
        happening to form these breakouts & what to do to prevent them.
      </StyledParagraph>
      <br />
      <StyledParagraph>
        Seeing those changes in my skin, understanding what was going on, &
        knowing I have the ability to prevent them made me feel empowered &
        proud of my skin. This is what inspired me to become an Esthetician - to
        help you fall in love with your own skin again
      </StyledParagraph>
    </StyledSection>
  )
}

export default About
