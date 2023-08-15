import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/logo-ignite.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Link para a página timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Link para a página do histórico">
          <Scroll size={22} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
