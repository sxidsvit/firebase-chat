import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase'


const AuthContect = React.createContext()

export const useAuth = () => useContext(AuthContect)

export const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
      if (user) history.push('/chats')
    })
  }, [user, history])


  const value = { user }

  return (
    <AuthContect.Provider value={value} >
      {!loading && children}
    </AuthContect.Provider>
  )

}
