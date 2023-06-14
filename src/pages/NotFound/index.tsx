import { faChevronLeft, faLinkSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NotFoundContainer, NotFoundText } from './styles'
import { NavLink } from 'react-router-dom'

export function NotFound() {
  return (
    <NotFoundContainer>
      <NavLink to="/">
        <FontAwesomeIcon icon={faChevronLeft} />
        <span>VOLTAR</span>
      </NavLink>
      <NotFoundText>
        <h1>Oops!</h1>
        <span>Parece que alguma coisa quebrou</span>
      </NotFoundText>
      <FontAwesomeIcon icon={faLinkSlash} className="fa-10x" />
    </NotFoundContainer>
  )
}
