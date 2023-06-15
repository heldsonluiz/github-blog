import ReactMarkdown from 'react-markdown'
import { styled } from 'styled-components'

export const PostListContainer = styled.div`
  display: grid;
  align-content: center;
  justify-content: space-between;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;

  a {
    text-decoration: none;
    display: flex;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
export const PostCard = styled.div`
  background: ${(props) => props.theme['bluish-600']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  border: 2px solid transparent;
  width: 100%;

  &:hover {
    border: 2px solid ${(props) => props.theme['bluish-400']};
  }
`
export const PostCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: column;
  h2 {
    color: ${(props) => props.theme.white};
    font-size: 1.25rem;
    max-width: fit-content;
    margin-bottom: 1rem;
  }

  span {
    color: ${(props) => props.theme['bluish-300']};
    font-size: 0.875rem;
    text-align: right;
  }
`
export const PostCardContent = styled(ReactMarkdown)`
  color: ${(props) => props.theme['bluish-200']};
  line-height: 1.6;

  /* this code clamps based on specified lines */
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  display: -webkit-box;

  p {
    margin-bottom: 1rem;
  }
  h3 {
    color: ${(props) => props.theme.primary};
    font-weight: normal;
    font-size: 1rem;
    margin-bottom: 0.5rem;
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
    padding-left: 1.75rem;
    margin-bottom: 1rem;
  }
  li {
    margin: 4px 0;
  }
  img {
    max-width: 100%;
  }
  pre {
    background: ${(props) => props.theme['bluish-700']};
    color: ${(props) => props.theme['bluish-100']};
    padding: 1rem;
    font-size: 0.75rem;
    border-radius: 6px;
  }
`
