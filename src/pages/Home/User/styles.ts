import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['bluish-700']};
  color: ${(props) => props.theme['bluish-200']};
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  border-radius: 10px;
  padding: 2.75rem 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    img {
      margin: 0 auto;
    }
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

  @media (max-width: 540px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`
export const UserBio = styled.section`
  color: ${(props) => props.theme['bluish-200']};
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`
export const UserDetails = styled.section`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  text-transform: lowercase;

  svg {
    line-height: 0;
    margin-right: 0.5rem;
    color: ${(props) => props.theme['bluish-400']};
  }

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    font-size: 0.875rem;

    svg {
      width: 24px;
    }
  }
`
