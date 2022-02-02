import {Navigate, useLocation} from 'react-router-dom'
import {useAuth} from '../contexts/auth-context'

export function RequireAuth({children}) {
  const {user} = useAuth()
  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" state={{path: location.pathname}} />
  }

  return children
}
