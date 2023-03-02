import React from 'react'
import { Navigate } from 'react-router-dom'
import UseAuth from '../auth/UseAuth'

export default function PublicRoute({children}) {

  const auth = UseAuth()

  if (!auth.isLogged()) {
    return(<Navigate to='/dashboard' />)
  }

  return(
    children
  )

}
