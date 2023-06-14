import { styled } from 'styled-components'

export const SearchContainer = styled.div`
  margin: 4.5rem 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    background: ${(props) => props.theme['bluish-900']};
    padding: 0.75rem 1rem;
    border: 0;
    outline: 1px solid ${(props) => props.theme['bluish-500']};
    border-radius: 6px;
    color: ${(props) => props.theme['bluish-400']};
    width: 100%;

    &:focus {
      color: ${(props) => props.theme['bluish-200']};
      border-color: ${(props) => props.theme.primary};
    }

    &::placeholder {
      color: ${(props) => props.theme['bluish-400']};
    }
  }
`
export const SearchContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: row;
  gap: 1rem;

  h2 {
    color: ${(props) => props.theme.white};
    font-size: 1.125rem;
    max-width: fit-content;
  }

  span {
    color: ${(props) => props.theme['bluish-300']};
    font-size: 0.875rem;
    display: block;
    min-width: fit-content;
  }
`
