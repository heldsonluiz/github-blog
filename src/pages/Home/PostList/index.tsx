import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { NavLink } from 'react-router-dom'
import {
  PostListContainer,
  PostCard,
  PostCardTitle,
  PostCardContent,
} from './styles'
import { useContext } from 'react'
import { PostsContext } from '../../../contexts/PostsContext'

export function PostList() {
  const { postList } = useContext(PostsContext)

  function trimPostContent(bodyText: string) {
    return bodyText.length > 240 ? bodyText.substring(0, 240) + '...' : bodyText
  }

  return (
    <PostListContainer>
      {postList.map((post) => {
        return (
          <NavLink to={`/post/${post.number}`} key={post.id}>
            <PostCard>
              <PostCardTitle>
                <span>
                  {formatDistanceToNow(new Date(post.updatedAt), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
                <h2>{post.title}</h2>
              </PostCardTitle>
              <PostCardContent>{trimPostContent(post.body)}</PostCardContent>
            </PostCard>
          </NavLink>
        )
      })}
    </PostListContainer>
  )
}
