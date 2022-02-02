import {useNavigate} from 'react-router-dom'
import {useAuth} from '../contexts/auth-context'

export function Profile() {
  const {user, logout} = useAuth()
  const navigate = useNavigate()

  const handleClick = () => {
    logout()
    navigate('/')
  }

  return (
    <>
      <div>Welcome {user}</div>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </>
  )
}
