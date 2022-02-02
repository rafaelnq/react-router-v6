import {createContext, useContext, useState} from 'react'

const AuthContext = createContext()

export function AuthProvider({children}) {
  const [user, ssetUser] = useState(null)

  const login = user => {
    ssetUser(user)
  }

  const logout = () => {
    ssetUser(null)
  }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
