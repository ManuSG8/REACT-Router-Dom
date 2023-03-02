import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import UseAuth from '../auth/UseAuth'

export default function Login() {

  const auth = UseAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const previousURL = location.state?.from
  console.log(auth.isLogged())

  const handleLogin = () => {
    auth.login()
    navigate(previousURL ?? '/dashboard')
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>
        SignIn
      </button>
    </div>
  )
}
