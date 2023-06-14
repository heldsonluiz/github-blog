import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  font-family: Coda, monospace;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9rem 3rem;

  a {
    font-size: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    width: fit-content;
    gap: 0.5rem;
    text-transform: uppercase;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.primary};
    }

    svg {
      line-height: 0;
    }
  }

  svg {
    color: ${(props) => props.theme.primary};
  }
`

export const NotFoundText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`
