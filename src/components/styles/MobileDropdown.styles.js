import styled from 'styled-components'

export const StyledMobileDropdown = styled.section`
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 20, 1);
  height: 100vh;
  width: 100vw;
  transform: translateX(100%);
  transition: transform 0.25s;
`
