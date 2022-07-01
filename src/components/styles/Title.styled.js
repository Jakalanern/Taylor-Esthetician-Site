import styled from 'styled-components'

export const StyledTitle = styled.h1`
  font-size: ${(props) => props.fontSize || '4.1em'};
  margin-bottom: 0.5em;
  text-align: center;
  font-weight: 400;
  padding-top: 96px;

  @media (min-width: 875px) {
    font-size: 164px;
    margin-bottom: 0.25em;
    padding-top: 112px;
  }
`
