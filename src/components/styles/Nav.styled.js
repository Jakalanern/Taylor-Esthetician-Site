import styled from 'styled-components'

export const StyledNav = styled.nav`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 99;
  padding: 0.5em 1em;
  font-size: 16px;
  transition: background 0.25s, opacity 0.25s;

  @media (min-width: 875px) {
      font-size: 24px;
      padding-right: 92px;
      padding: 1.5em 0em;
      justify-content: center;
`
