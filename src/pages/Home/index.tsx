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

export function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <img src="https://github.com/heldsonluiz.png" alt="" />
        <UserInfo>
          <UserTitle>
            <h1>Heldson Luiz</h1>
            <NavLink to="https://github.com/heldsonluiz">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </NavLink>
          </UserTitle>
          <UserBio>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </UserBio>
          <UserDetails>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              heldsonluiz
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              Kanttum
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              15 seguidores
            </span>
          </UserDetails>
        </UserInfo>
      </HeaderContainer>

      <SearchContainer>
        <SearchContainerTitle>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </SearchContainerTitle>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchContainer>

      <PostListContainer>
        <PostCard>
          <PostCardTitle>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </PostCardTitle>
          <PostCardContent>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </PostCardContent>
        </PostCard>
        <PostCard>
          <PostCardTitle>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </PostCardTitle>
          <PostCardContent>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </PostCardContent>
        </PostCard>
        <PostCard>
          <PostCardTitle>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </PostCardTitle>
          <PostCardContent>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </PostCardContent>
        </PostCard>
        <PostCard>
          <PostCardTitle>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </PostCardTitle>
          <PostCardContent>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in...
          </PostCardContent>
        </PostCard>
      </PostListContainer>
    </HomeContainer>
  )
}
