import { styled } from 'styled-components'

export const HomeContainer = styled.div``

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['bluish-700']};
  color: ${(props) => props.theme['bluish-200']};
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  border-radius: 10px;
  padding: 2rem 2.25rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-between;
  justify-content: space-between;

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${(props) => props.theme.white};
  }

  a {
    font-weight: 700;
    font-size: 0.75rem;
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    border-bottom: 1px solid transparent;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      line-height: 0;
    }
  }

  a:hover {
    transition: border-bottom 0.2s;

    border-bottom: 1px solid ${(props) => props.theme.primary};
  }
`
export const UserTitle = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`
export const UserBio = styled.section`
  color: ${(props) => props.theme['bluish-200']};
`
export const UserDetails = styled.section`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  svg {
    line-height: 0;
    margin-right: 0.5rem;
    color: ${(props) => props.theme['bluish-400']};
  }
`

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

export const PostListContainer = styled.div`
  display: grid;
  align-content: center;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
export const PostCard = styled.div`
  background: ${(props) => props.theme['bluish-600']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${(props) => props.theme['bluish-400']};
  }
`
export const PostCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: row;
  gap: 1rem;

  h2 {
    color: ${(props) => props.theme.white};
    font-size: 1.25rem;
    max-width: fit-content;
  }

  span {
    color: ${(props) => props.theme['bluish-300']};
    font-size: 0.875rem;
    display: block;
    min-width: fit-content;
  }
`
export const PostCardContent = styled.p`
  line-height: 1.6;
  color: ${(props) => props.theme['bluish-200']};
`
