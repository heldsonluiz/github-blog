import { styled } from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const PostContainer = styled.main``

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['bluish-700']};
  color: ${(props) => props.theme['bluish-200']};
  display: flex;
  gap: 1.25rem;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  padding: 2rem 2.25rem;
`

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

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

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.primary};
    }

    svg {
      line-height: 0;
    }
  }
`
export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.white};
  gap: 0.5rem;

  h2 {
    font-size: 1.5rem;
    line-height: 1.3;
  }
`
export const PostDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: ${(props) => props.theme['bluish-300']};

  svg {
    line-height: 0;
    margin-right: 0.5rem;
  }

  @media (max-width: 540px) {
    align-items: flex-start;
    gap: 0;
    flex-direction: column;
    color: #7b96b2;
    font-size: 0.875rem;
    margin-top: 1rem;
  }
`
export const PostContent = styled(ReactMarkdown)`
  color: ${(props) => props.theme['bluish-200']};
  padding: 2.5rem 2rem;
  line-height: 1.6;

  @media (max-width: 540px) {
    padding: 2.5rem 0.5rem;
    font-size: 0.9rem;
  }

  p {
    margin-bottom: 1rem;
  }
  h3 {
    margin: 1.6rem 0 1rem;
    color: ${(props) => props.theme.primary};
    font-weight: normal;
    font-size: 1.25rem;
  }
  a {
    text-decoration: none;
    border-bottom: 1px solid transparent;
    color: ${(props) => props.theme['bluish-300']};

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['bluish-300']};
      transition: border 0.2s;
    }
  }
  h2 {
    margin: 1.6rem 0 0.875rem;
    font-size: 1.125rem;
    font-weight: bold;
    border-bottom: 1px solid ${(props) => props.theme['bluish-500']};
  }
  ul,
  ol {
    padding-left: 2.5rem;
    margin: 1.25rem 0;
  }
  li {
    margin-bottom: 0.825rem;
  }
  img {
    max-width: 100%;
  }
  blockquote {
    border-left: 3px solid ${(props) => props.theme.primary};
    padding: 0 1rem;
  }
  code {
    margin: 0;
    font-size: 0.875rem;
    white-space: break-spaces;
    border-radius: 6px;
    background-color: ${(props) => props.theme['bluish-500']};
  }
  pre {
    background: ${(props) => props.theme['bluish-500']};
    color: ${(props) => props.theme['bluish-100']};
    padding: 1rem;
    font-size: 0.75rem;
    margin: 1rem;
    border-radius: 6px;
  }
`
