import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import {
  UserInfo,
  UserTitle,
  UserBio,
  UserDetails,
  HeaderContainer,
} from './styles'

import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../../libs/axios'

import { USER } from '../../../helpers/variables'

interface UserInterface {
  name: string
  bio: string
  login: string
  company: string
  followers: string
  htmlUrl: string
  avatarUrl: string
}

export function User() {
  const [user, setUser] = useState<UserInterface>({} as UserInterface)

  async function fetchUser() {
    const response = await api.get(`/users/${USER}`)
    const {
      name,
      bio,
      login,
      company,
      followers,
      html_url: htmlUrl,
      avatar_url: avatarUrl,
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
        avatarUrl,
      }
    })
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <HeaderContainer>
      <img src={user.avatarUrl} alt="" />
      <UserInfo>
        <UserTitle>
          <h1>{user.name}</h1>
          <NavLink to={user.htmlUrl}>
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
  )
}
