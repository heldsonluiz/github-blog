import { ReactNode, createContext, useEffect, useState } from 'react'
import { USER, REPO } from '../helpers/variables'
import { api } from '../libs/axios'

export interface Post {
  id: string
  number: string
  htmlUrl: string
  title: string
  user: string
  updatedAt: string
  comments: string
  body: string
}

interface PostsContextType {
  postList: Post[]
  fetchPosts: (query?: string) => Promise<void>
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [postList, setPostList] = useState<Post[]>([])

  async function fetchPosts(searchParam = '') {
    const response = await api.get(
      `search/issues?q=repo:${USER}/${REPO}+${searchParam}+label:published`,
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

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostsContext.Provider
      value={{
        postList,
        fetchPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
