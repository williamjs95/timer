import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src="src\assets\ignite-logo.png" alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={38} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={38} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
