import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  HeaderContainer,
  HeaderNavigation,
  PostContainer,
  PostContent,
  PostDetails,
  PostInfo,
} from './styles'
import { NavLink, useParams } from 'react-router-dom'
import { api } from '../../libs/axios'
import { useEffect, useState } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ptBR from 'date-fns/locale/pt-BR'

import { USER, REPO } from '../../helpers/variables'

interface Post {
  id: number
  issueNumber: number
  htmlUrl: string
  title: string
  user: string
  updatedAt: string
  comments: number
  body: string
}

export function BlogPost() {
  const [post, setPost] = useState<Post>({} as Post)
  const { postId } = useParams()

  async function fetchPost(postId: string) {
    const response = await api.get(`repos/${USER}/${REPO}/issues/${postId} `)
    const {
      id,
      number: issueNumber,
      title,
      user,
      body,
      html_url: htmlUrl,
      updated_at: updatedAt,
      comments,
    } = response.data

    setPost((state) => {
      return {
        ...state,
        id,
        issueNumber,
        title,
        user: user.login,
        body,
        htmlUrl,
        updatedAt,
        comments,
      }
    })
  }

  useEffect(() => {
    if (postId) fetchPost(postId)
  }, [postId])

  return (
    <PostContainer>
      <HeaderContainer>
        <HeaderNavigation>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </NavLink>
          <NavLink to={`${post.htmlUrl}`}>
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </NavLink>
        </HeaderNavigation>
        <PostInfo>
          <h2>{post.title}</h2>
          <PostDetails>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {post.user}
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              {formatDistanceToNow(new Date(), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} />
              {post.comments > 1 || post.comments === 0
                ? `${post.comments} comentários`
                : `${post.comments} comentário`}
            </span>
          </PostDetails>
        </PostInfo>
      </HeaderContainer>
      <PostContent>{post.body}</PostContent>
    </PostContainer>
  )
}
