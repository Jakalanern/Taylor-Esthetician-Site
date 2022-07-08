import styled from 'styled-components'

export const StyledSection = styled.section`
  background-image: linear-gradient(
      ${({ overlayColor }) => overlayColor || 'transparent'},
      ${({ overlayColor }) => overlayColor || 'transparent'}
    ),
    url('${({ img }) => img}');

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 875px) {
    justify-content: flex-start;
  }
`
