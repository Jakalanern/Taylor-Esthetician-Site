import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 2em;
  background: rgba(0, 0, 0, 0.25);
  color: white;
  border: 1px solid white;
  font-size: 1.25em;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: background 0.25s, transform 0.25s;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    transform: scale(1.025);
  }
`
