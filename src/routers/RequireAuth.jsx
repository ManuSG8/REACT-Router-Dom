import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import UseAuth from '../auth/UseAuth'

export default function AuthRequire({children}) {

  const auth = UseAuth()
  const location = useLocation()

  if (auth.isLogged()) {
    return(<Navigate to={{pathname:'/login', state:{from: location}}} />)
  }

  return(
    children
  )

}
