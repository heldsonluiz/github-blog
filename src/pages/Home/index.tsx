import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  HeaderContainer,
  HomeContainer,
  PostCard,
  PostCardContent,
  PostCardTitle,
  PostListContainer,
  SearchContainer,
  SearchContainerTitle,
  UserBio,
  UserDetails,
  UserInfo,
  UserTitle,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../libs/axios'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ptBR from 'date-fns/locale/pt-BR'

import { USER, REPO } from '../../helpers/variables'

import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface User {
  name: string
  bio: string
  login: string
  company: string
  followers: string
  htmlUrl: string
}
interface Post {
  id: string
  number: string
  htmlUrl: string
  title: string
  user: string
  updatedAt: string
  comments: string
  body: string
}

const searchFormSchema = z.object({
  searchParam: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Home() {
  const [user, setUser] = useState<User>({} as User)
  const [postList, setPostList] = useState<Post[]>([])

  async function fetchUser() {
    const response = await api.get(`/users/${USER}`)
    const {
      name,
      bio,
      login,
      company,
      followers,
      html_url: htmlUrl,
    } = response.data

    setUser((state) => {
      return {
        ...state,
        name,
        bio,
        login,
        company,
        followers,
        htmlUrl,
      }
    })
  }

  async function fetchBlogPosts(searchParam = '') {
    const response = await api.get(
      `search/issues?q=${searchParam} repo:${USER}/${REPO}`,
    )
    const posts: Post[] = response.data.items.map((post: any) => {
      return {
        id: post.id,
        number: post.number,
        htmlUrl: post.html_url,
        title: post.title,
        user: post.user,
        updatedAt: post.updated_at,
        comments: post.comments,
        body: post.body,
      }
    })
    setPostList(posts)
  }

  function trimPostContent(bodyText: string) {
    return bodyText.length > 240 ? bodyText.substring(0, 240) + '...' : bodyText
  }

  async function handleSearchBlogPosts(data: SearchFormInputs) {
    await fetchBlogPosts(data.searchParam)
  }

  useEffect(() => {
    fetchUser()
    fetchBlogPosts()
  }, [])

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      searchParam: '',
    },
  })

  return (
    <HomeContainer>
      <HeaderContainer>
        <img src="https://github.com/heldsonluiz.png" alt="" />
        <UserInfo>
          <UserTitle>
            <h1>{user.name}</h1>
            <NavLink to={`https://github.com/${user.login}`}>
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </NavLink>
          </UserTitle>
          <UserBio>{user.bio}</UserBio>
          <UserDetails>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {user.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {user.company}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {user.followers} seguidores
            </span>
          </UserDetails>
        </UserInfo>
      </HeaderContainer>

      <SearchContainer>
        <SearchContainerTitle>
          <h2>Publicações</h2>
          <span>{postList.length} publicações</span>
        </SearchContainerTitle>
        <form onSubmit={handleSubmit(handleSearchBlogPosts)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('searchParam')}
          />
        </form>
      </SearchContainer>

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
    </HomeContainer>
  )
}
