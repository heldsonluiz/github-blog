import { HomeContainer } from './styles'
import { SearchForm } from './SearchForm'
import { User } from './User'
import { PostList } from './PostList'

export function Home() {
  return (
    <HomeContainer>
      <User />
      <SearchForm />
      <PostList />
    </HomeContainer>
  )
}
