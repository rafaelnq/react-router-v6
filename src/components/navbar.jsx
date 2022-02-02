import {NavLink} from 'react-router-dom'
import {useAuth} from '../contexts/auth-context'

export function Navbar() {
  const {user} = useAuth()

  function navLinkStyles({isActive}) {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    }
  }

  return (
    <nav className="primary-nav">
      <NavLink to="/" style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={navLinkStyles}>
        About
      </NavLink>
      <NavLink to="/products" style={navLinkStyles}>
        Products
      </NavLink>
      {user ? (
        <NavLink to="/profile" style={navLinkStyles}>
          Profile
        </NavLink>
      ) : (
        <NavLink to="/login" style={navLinkStyles}>
          Login
        </NavLink>
      )}
    </nav>
  )
}
