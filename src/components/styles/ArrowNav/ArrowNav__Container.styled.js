import styled from 'styled-components'

export const StyledArrowNavContainer = styled.div`
  position: absolute;
  bottom: 3vmax;
  left: 0.15em;
  font-size: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0em 0.5em;
  writing-mode: vertical-rl;
  cursor: pointer;
  transition: transform 0.25s;
  z-index: 99;

  &:hover {
    transform: translateY(15px);
  }

  @media (min-width: 885px) {
    font-size: 64px;
    left: 0.5em;
  }
`
