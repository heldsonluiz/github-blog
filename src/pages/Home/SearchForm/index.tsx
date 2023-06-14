import { SearchContainer, SearchContainerTitle } from './styles'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { PostsContext } from '../../../contexts/PostsContext'

const searchFormSchema = z.object({
  searchParam: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      searchParam: '',
    },
  })

  const { fetchPosts, postList } = useContext(PostsContext)

  async function handleSearchBlogPosts(data: SearchFormInputs) {
    await fetchPosts(data.searchParam)
  }

  return (
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
  )
}
