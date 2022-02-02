import {useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {useAuth} from '../contexts/auth-context'

export function Login() {
  const [username, setUsername] = useState('')
  const {login} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/'

  const handleSubmit = event => {
    event.preventDefault()
    login(username)
    navigate(redirectPath, {replace: true})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
